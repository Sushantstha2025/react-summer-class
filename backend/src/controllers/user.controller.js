import bcrypt from 'bcrypt'
import userModel from '../models/User.js'
import config from "../config/config.js"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body
        const userRole = role === "admin" ? "admin" : "user"

        if(userRole === "admin"){
            const checkAdmin = await userModel.findOne({role: 'admin'})
            if(checkAdmin){
                return res.status(403).json({
                    message: "An admin already exists"
                })
            }
        }
        const checkUser = await userModel.findOne({email})
        if(checkUser){
            return res.status(400).json({
                message: "User with this email already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            name,
            email, 
            password: hashedPassword,
            role: userRole
        })

        res.status(201).json({
            message: "Successfully created a new member",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const checkUser = await userModel.findOne({email})
        if(!checkUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if(!checkPassword){
            return res.status(403).json({
                message: "Passwords do not match"
            })
        }

        const token = jwt.sign({
            id: checkUser._id, 
            role: checkUser.role
        }, 
        config.secret, 
        {
            expiresIn: "24h"
        }
        )

        res.status(200).json({
            message: "User successfully logged in",
            token: token,
            user: {
                _id: checkUser._id,
                name: checkUser.name,
                email: checkUser.email,
                role: checkUser.role
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const userProfile = async (req, res) => {
    try {
        const userId = req.params.userId || req.user?.id
        const checkUser = await userModel.findById(userId).select("-password") 
        if(!checkUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "user information", 
            user: checkUser
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}