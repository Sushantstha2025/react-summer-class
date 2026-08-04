import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, "Brand of the car is required"]
    }, 

    model: {
        type: String, 
        required: [true, "Model of the car is required"]
    }, 

    description: String,

    mileage: Number,

    color: String,

    licensePlate: {
        type: String, 
        unique: true
    },

    category: {
        type: String, 
        enum: ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Pickup", "Van"], 
        required: true
    }, 

    fuelType: {
        type: String, 
        enum: ["Petrol", "Diesel", "Electric", "Hybrid"], 
        required: true
    },

    transmission: {
        type: String, 
        enum: ["Automatic", "Manual"], 
        required: true
    },

    seats: {
        type: Number, 
        required: true
    }, 

    pricePerDay: {
        type: Number, 
        required: [true, "Price of the car is required"]
    }, 

    image: String,

    status: {
        type: String, 
        enum: ["Available", "Rented", "Maintenance"] ,
        required: true, 
        default: "Available"
    }

}, 
{
    timestamps:true
}
)

const vehicle = mongoose.model("vehicle", vehicleSchema)

export default vehicle