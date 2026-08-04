import express from "express"
import {bookVehicle, bookingHistory, getAllBookings, cancelBooking} from "../controllers/rentals.controller.js"
import authenticate from "../middlewares/authenticate.js"

const router = express.Router()

router.post("/bookVehicle/:vehicleId", authenticate, bookVehicle)
router.post("/bookVehicle", authenticate, bookVehicle)

router.get("/getBooking", authenticate, bookingHistory)
router.get("/getBooking/:userId", authenticate, bookingHistory)
router.get("/allBookings", authenticate, getAllBookings)

router.delete("/deleteBooking/:id", authenticate, cancelBooking)

export default router