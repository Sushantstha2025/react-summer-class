import jwt from "jsonwebtoken"
import config from "../config/config.js"

const authenticate = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(404).json({
            message: "No authHeader found"
        })
    }
    const token = authHeader.split(" ")[1]

    if(!token){
        return res.status(404).json({
            message: "Token not found"
        })
    }

    try {
        const decoded = jwt.verify(token, config.secret)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export default authenticate