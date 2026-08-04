import mongoose from "mongoose"; 
import rentalModel from "../models/Rental.js"
import vehicleModel from "../models/Vehicle.js"
import userModel from "../models/User.js"

export const bookVehicle = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId || req.body.vehicleId
        const userId = req.user?.id || req.params.userId || req.body.userId

        const vehicle = await vehicleModel.findById(vehicleId)
        if(!vehicle){
            return res.status(404).json({
                message: "Vehicle not found"
            })
        }

        const user = await userModel.findById(userId)
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }

        const {startDate, endDate, status, price} = req.body

        const start = new Date(startDate)
        const end = new Date(endDate)

        if(start > end){
            return res.status(400).json({
                message: "Start date cannot be past the end date"
            })
        }

        const existingBooking = await rentalModel.find({
            vehicleId: vehicleId,
            status: { $ne: "Cancelled" },
            startDate: {$lte: end},   // overlapping case
            endDate: {$gte: start}
        })

        if(existingBooking && existingBooking.length > 0){
            return res.status(400).json({
                message: "Vehicle is already booked for these dates. Please select another vehicle or date range."
            })
        }

        const calculateDays = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
        const calculatedPrice = price || (vehicle.pricePerDay * calculateDays)

        const newRental = await rentalModel.create({
            userId, 
            vehicleId, 
            startDate, 
            endDate, 
            status: status || "Booked", 
            price: calculatedPrice
        })

        res.status(201).json({
            message: `Successfully rented ${vehicle.brand} ${vehicle.model}`,
            rental: newRental
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const bookingHistory = async (req, res) => {
    try {
        const userId = req.user?.id || req.params.userId
        const history = await rentalModel.find({userId})
            .populate("vehicleId")
            .populate("userId", "name email")
            .sort({ createdAt: -1 })
            
        res.status(200).json({
            message: "User booking history retrieved", 
            history: history
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllBookings = async (req, res) => {
    try {
        const history = await rentalModel.find()
            .populate("vehicleId")
            .populate("userId", "name email")
            .sort({ createdAt: -1 })

        res.status(200).json({
            message: "All system bookings retrieved",
            history: history
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const cancelBooking = async (req, res) => {
    try {
        const bookingId = req.params.id || req.params.bookingId
        const delBooking = await rentalModel.findByIdAndUpdate(bookingId, { status: "Cancelled" }, { new: true })
        if(!delBooking){
            return res.status(404).json({
                message: "No booking found"
            })
        }

        res.status(200).json({
            message: "Successfully cancelled the booking!",
            rental: delBooking
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
