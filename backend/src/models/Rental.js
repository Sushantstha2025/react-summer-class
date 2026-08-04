import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "User id for rental is required"], 
        ref: "user"
    }, 

    vehicleId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Vehicle id for rental is required"], 
        ref: "vehicle"
    },

    startDate: {
        type: Date, 
        default: Date.now, 
        required: true
    }, 

    endDate: {
        type: Date, 
        required: true
    },

    status: {
        type: String, 
        enum: ["Booked", "Active", "Completed", "Cancelled"],   // user books a car, status: Booked, user rides the car from the date: status: Active, user finishes the car ride for the date: status: Completed, user cancels the booking before the date: status: Cancelled
        default: "Booked"
    }, 
    
    price: {
        type: Number, 
        required: true 
    }
}, 
{
    timestamps:true
}
)

const rental = mongoose.model("rental", rentalSchema)

export default rental