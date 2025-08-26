import express from "express"
import dotenv from "dotenv"

import notesRouter from "./src/routes/notesRoute.js"
import { connectDB } from "./src/config/connectDB.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB()

app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
})
