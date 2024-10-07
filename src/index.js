import 'dotenv/config'; 

import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import { error, log } from 'console';
import app from "./app.js";




//below we did same db connection throw module
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console,log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((error) =>{
    console.log("MONGO db connection failed !!!", error)
})

/*
//import express from "express";
//const app=express();




( async()=>{ 
    try{
        const db=await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
       )
       app.on("error",(error)=>{
        console.log("ERROR1",error)
       })
      console.log("db connected successfully")

       app.listen(Number(process.env.PORT) || 8000, ()=>{
        console.log(`App is listining on port ${Number(process.env.PORT)}`);
       })
    }catch(error){
        console.log("ERROR2: mongodb conncetion failed :", error)
        throw error;
    }
})()
app.get("/", (req, res) =>{
    console.log("starting server..");
    res.send("now you are running your server successfully");
});*/
