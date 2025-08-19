
import dotenv from "dotenv";

import mongoose  from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
    app.on("error",(error)=>{
        console.log("ERROR",error);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!!",err);
})