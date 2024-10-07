import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


  const connectDB= async() =>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Mongodb connected !! DB HOST: ${
        connectionInstance.connection.host
       }`);
      

    }catch(error){
        console.log("mongoose connection ERROR/FAILED", error)
    }
}

export default connectDB;