import resetModel from "../models/PasswordReset.js"
import userModel from "../models/User.js"
import crypto from "crypto"
import bcrypt from "bcrypt"
import { sendOTP, sendResetToken } from "../services/sendOTP.services.js"

export const forgetPassword = async (req, res) => {
    try {
    const {email} = req.body
    const checkUser = await userModel.findOne({email})
    if(!checkUser){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const otp = crypto.randomInt(100000, 1000000).toString()
    const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex")

    const otpExpiresAt = new Date(Date.now() + 5 * 1000 * 60) // 5 min expiry
    
    const reset = await resetModel.create({
        email, 
        otp: hashedOTP, 
        otpExpiresAt
    })

    res.status(200).json({
        message: "OTP is: ", 
        otp: otp
    })
    
    sendOTP(email, otp)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
    
}

export const verifyOTP = async (req, res) => {
    try {
        const {email, otp} = req.body
    const checkEmail = await resetModel.findOne({email})
    if(!checkEmail){
        return res.status(404).json({
            message: "Email not found"
        })
    }

    if(Date.now() > checkEmail.otpExpiresAt){
        await resetModel.findOneAndDelete({email})
        return res.status(403).json({
            message: "OTP expired"
        })
    }

    const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex")

    if(hashedOTP.toString() !== checkEmail.otp){
        return res.status(400).json({
            message: "OTP not verified"
        })
    }


    const resetToken = crypto.randomInt(100000, 1000000).toString()
    console.log(resetToken)
    const hashToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    const tokenExpiresAt = new Date(Date.now() + 60*1000*5)

    checkEmail.resetToken = hashToken
    checkEmail.tokenExpiresAt = tokenExpiresAt
    checkEmail.otp = null
    checkEmail.otpExpiresAt = null

    await checkEmail.save()
    res.status(200).json({
        message: "OTP verified", 
        token: resetToken
    })

    console.log(resetToken)
    sendResetToken(email, resetToken)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
    
}

export const resetPassword = async (req, res) => {
    try {
        const {resetToken, password} = req.body
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest("hex")
    const checkUser = await resetModel.findOne({resetToken: hashedToken})

    if(!checkUser){
        return res.status(404).json({
            message: "User not found"
        })
    }

    if(Date.now() > checkUser.tokenExpiresAt){
        await resetModel.findOneAndDelete({resetToken: hashedToken})
        return res.status(400).json({
            message: "Token already expired"
        })
    }


    const hashedPassword = await bcrypt.hash(password, 10)
    await userModel.findOneAndUpdate({email: checkUser.email}, {password: hashedPassword}, {returnDocument: "after"})

    await resetModel.findOneAndDelete({email: checkUser.email}) // if deletion fails, the client will never know about it, so, delete first and then send the response message later. So, that, if the deletion fails, the client will be noticed. 

    res.status(200).json({
        message: `Successfully updated the email for: ${checkUser.email}`
    })
    
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
    
}

