import mongoose from "mongoose"
import config from "./config.js"

export const connectDB = async () => {
    await mongoose.connect(config.uri)
    console.log("DB connected successfully")
}
