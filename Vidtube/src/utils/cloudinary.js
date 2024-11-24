import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    // cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
    // api_key: 'process.env.CLOUDINARY_API_KEY', 
    // api_secret: 'process.env.CLOUDINARY_API_SECRET'
    cloud_name: 'dovazuc1c', 
    api_key: '678536761661229',
    api_secret: '0TXATOqNsQL0Yks4_pPPZontluw'
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null 
        const response = await cloudinary.uploader.upload
        (localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        console.log("file is uploaded on cloudinary", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;    
    } 
}

export {uploadOnCloudinary}