import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import { HTTPSTATUS } from "./config/http.config.js"
dotenv.config()

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
        origin:process.env.FRONTEND_ORIGIN,
        credentials:true
    })
)

app.get("/test",(req,res)=>{
    res.status(HTTPSTATUS.OK).send("app is working")
})

app.use(ErrorHandler)



app.listen(process.env.PORT||5000,()=>{
    console.log("server is running on port:",process.env.PORT)
})
