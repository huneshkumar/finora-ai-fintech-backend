import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import { HTTPSTATUS } from "./config/http.config.js"
import { errorHandler } from "./midlewares/errorHandler.middleware.js"
import { BadRequestException } from "./utils/app-error.js"
import { asyncHandler } from "./utils/asyncHandler.js"
import { dbConnection } from "./config/dbConfig.js"
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


app.get(
  "/",
  asyncHandler(async (req, res, next) => {
    throw new BadRequestException("This is a test error");
    res.status(HTTPSTATUS.OK).json({
      message: "Hello Subcribe to the channel",
    });
  })
);

app.use(errorHandler)


app.listen(process.env.PORT||5000, async ()=>{
    await dbConnection()
    console.log("server is running on port:",process.env.PORT)
})
