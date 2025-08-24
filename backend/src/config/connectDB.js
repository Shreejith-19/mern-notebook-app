import mongooose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_URI

export async function connectDB(){
    try{
        await mongooose.connect(uri)
        console.log("connected to DB")
    }catch(err){
        console.error("Connection Failed", err)
    }
}