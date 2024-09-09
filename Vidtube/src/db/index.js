import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ( ) => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected !! DB host: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
    } catch (error) {
        console.log("MONGODB connection error ", error)
        Process.exit(1)        
    }
}

export default connectDB