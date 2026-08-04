import nodemailer from "nodemailer"
import config from "../config/config.js"

import userModel from '../models/User.js'

export async function sendOTP(email, otp) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: config.smtpPort || 465,
        secure: (Number(config.smtpPort) === 465),
        auth: {
            user: config.user,
            pass: config.pass
        }
    })


    try {
        const info = await transporter.sendMail({
            from: "carRental@gmail.com", 
            to: email, 
            subject: `Password Reset: `,
            text: otp
        })
        console.log(`OTP sent to the email: ${email}`)
    } catch (error) {
        console.log(error.message)
    }

}

export async function sendResetToken(email, token) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: config.smtpPort || 465,
        secure: (Number(config.smtpPort) === 465),
        auth: {
            user: config.user,
            pass: config.pass
        }
    })


    try {
        const info = await transporter.sendMail({
            from: "carRental@gmail.com", 
            to: email, 
            subject: `Password Reset: `,
            text: token
        })
        console.log(`Reset password token sent to ${email}`)
    } catch (error) {
        console.log(error.message)
    }

}