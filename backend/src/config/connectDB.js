import mongooose from "mongoose"

export async function connectDB(){
    try{
        await mongooose.connect("mongodb+srv://shreejith1919:WjOnHmOofzY8FbN5@cluster0.zgsltsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to DB")
    }catch(err){
        console.error("Connection Failed", err)
    }
}