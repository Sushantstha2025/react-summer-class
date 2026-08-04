import "dotenv/config"

const config = {
    port: process.env.PORT, 
    uri: process.env.MONGODB_URI, 
    secret: process.env.JWT_SECRET,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    imageKitUrl: process.env.IMAGEKIT_URL_ENDPOINT,
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS, 
    smtpPort: process.env.SMTP_PORT
}

export default config