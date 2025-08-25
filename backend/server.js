import express from "express"
import dotenv from "dotenv"
import notesRouter from "./src/routes/notesRoute.js"
import { connectDB } from "./src/config/connectDB.js"

const app = express()
const port = 5000

dotenv.config()

connectDB()

app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
})
