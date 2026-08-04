import ImageKit from "@imagekit/nodejs"
import config from "../config/config.js"

const client = new ImageKit({
    privateKey: config.privateKey, 
    publicKey: config.publicKey
})

export async function uploadFile(buffer) {
    console.log(buffer)
    const result = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result  // result contains image url, thumbnail url, image id and all of other things
}

