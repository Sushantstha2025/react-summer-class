import vehicleModel from "../models/Vehicle.js"
import { uploadFile } from "../services/storage.services.js"

export const getCars = async (req, res) => {
    try {
        const cars = await vehicleModel.find()
        res.status(200).json({
            message: "Information of all cars: ", 
            cars: cars
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCarById = async (req, res) => {
    try {
        const carId = req.params.carId || req.params.id
        const car = await vehicleModel.findById(carId)
        if(!car) {
            return res.status(404).json({ message: "Vehicle not found" })
        }
        res.status(200).json({
            message: "Vehicle details retrieved successfully",
            car: car
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createCars = async (req, res) => {
    try {
        if(req.user?.role !== "admin"){
            return res.status(403).json({
                message: "Action forbidden: Admin access required"
            })
        }

        console.log(req.body)
        const {brand, model, description, mileage, color, licensePlate, category, fuelType, transmission, seats, pricePerDay, status, image} = req.body
        let imageUrl = image || ""

        if(req.file) {
            const result = await uploadFile(req.file.buffer)
            imageUrl = result.url
        }

        const car = await vehicleModel.create({ 
            brand, 
            model, 
            description, 
            mileage, 
            color, 
            licensePlate,
            category, 
            fuelType, 
            transmission, 
            seats, 
            pricePerDay, 
            image: imageUrl, 
            status: status || "Available"
        })

        res.status(201).json({
            message: `New vehicle: ${model} added successfully`, 
            car
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateCar = async (req, res) => {
    try {
        if(req.user?.role !== "admin"){
            return res.status(403).json({
                message: "Action forbidden: Admin access required"
            })
        }

        const carId = req.params.carId || req.params.id
        const {brand, model, description, mileage, color, licensePlate, category, fuelType, transmission, seats, pricePerDay, status, image} = req.body

        let updateData = {brand, model, description, mileage, color, licensePlate, category, fuelType, transmission, seats, pricePerDay, status}
        if(image) updateData.image = image

        if(req.file) {
            const result = await uploadFile(req.file.buffer)
            updateData.image = result.url
        }

        const updatedCar = await vehicleModel.findByIdAndUpdate(carId, updateData, {new:true})

        res.status(200).json({
            message: "Updated successfully",
            car: updatedCar
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteCar = async (req, res) => {
    try {
        if(req.user?.role !== "admin"){
            return res.status(403).json({
                message: "Action forbidden: Admin access required"
            })
        }

        const carId = req.params.carId || req.params.id
        await vehicleModel.findByIdAndDelete(carId)
        res.status(200).json({
            message: "Successfully deleted the car"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}