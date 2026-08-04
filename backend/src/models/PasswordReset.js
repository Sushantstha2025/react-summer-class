import mongoose from "mongoose";

const resetSchema = new mongoose.Schema({
    email: String, 

    otp: String, 

    otpExpiresAt: {
        type: Date, 
    }, 

    resetToken: String  , 

    tokenExpiresAt: {
        type: Date, 
    }, 

})

const reset = mongoose.model("reset", resetSchema)
export default reset