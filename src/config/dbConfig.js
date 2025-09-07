import mongoose from "mongoose";


export const dbConnection= async()=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGO_DB_URL}`,{
            serverSelectionTimeoutMS:8000,
            socketTimeoutMS:45000,
            connectTimeoutMS:10000
        })
        console.log("DB connected")
    } catch (error) {
        console.log("db error",error)
        process.exit(1)
    }
}