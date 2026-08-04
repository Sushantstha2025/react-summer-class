import express from "express"
import authenticate from "../middlewares/authenticate.js"
import {getCars, getCarById, createCars, updateCar, deleteCar} from "../controllers/vehicle.controller.js"
import upload from "../middlewares/upload.js"

const router = express.Router()

router.get("/getCars", getCars)
router.get("/getCar/:id", getCarById)
router.post("/createCars", authenticate, upload.single("image"), createCars)
router.patch("/updateCar/:carId", authenticate, updateCar)
router.delete("/deleteCar/:carId", authenticate, deleteCar)

export default router