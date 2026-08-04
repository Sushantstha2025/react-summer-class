import express from "express";
import {forgetPassword, verifyOTP, resetPassword} from "../controllers/passwordReset.controller.js"

const router = express.Router()

router.post("/", forgetPassword)
router.post("/forget-password", forgetPassword)
router.post("/verify-otp", verifyOTP)
router.post("/reset-password", resetPassword)

export default router