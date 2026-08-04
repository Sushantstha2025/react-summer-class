import express from "express"
import {registerUser, loginUser, userProfile} from "../controllers/user.controller.js"
import authenticate from "../middlewares/authenticate.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile/:userId", authenticate, userProfile)

export default router