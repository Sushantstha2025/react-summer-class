import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import config from "./src/config/config.js";

connectDB()
const port = config.port

app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`)
})