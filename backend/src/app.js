import express from "express"
import cors from "cors"
import morgan from "morgan"
import userRoutes from "../src/routes/user.routes.js"
import resetPasswordRoute from "../src/routes/passwordReset.routes.js"
import rentalRoutes from "../src/routes/rental.routes.js"
import vehicleRoutes from "../src/routes/vehicle.routes.js"
 
// Docker cache test

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/user", userRoutes)
app.use("/api/reset", resetPasswordRoute)
app.use("/api/rents", rentalRoutes)
app.use("/api/cars", vehicleRoutes)

export default app
// CI/CD test
