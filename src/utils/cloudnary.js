import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,  
        api_secret: process.env.CLOUDINARY_API_SECRET, 
    });
    
    const uploadCloudnary = async  (localfilepath) => {
        try {
            if(!localfilepath) return null
               //upload the file on cloudnary
            const response = await cloudinary.uploader.upload(localfilepath, {
                resource_type: "auto"
         })
          //file has been uploaded successfully
                console.log("file is uploaded successfully on cloudinary",response.url);
                return response;

        } catch (error) {
            fs.unlinkSync(localfilepath)      // remove the locally saved temporary file as upload operation got failed
            
            return null
        }
    }

    export {uploadCloudnary}