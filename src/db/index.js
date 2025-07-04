import mongoose from "mongoose";
import {db_name} from "../constant.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongodg error",error);
        process.exit(1);
     }
}
export default connectDb