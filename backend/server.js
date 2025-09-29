import express from "express"
import dotenv from "dotenv"

import notesRouter from "./src/routes/notesRoute.js"
import { connectDB } from "./src/config/connectDB.js"
import { rateLimiter } from "./src/middlewares/rateLimiter.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

//middlewares
app.use(rateLimiter)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/notes", notesRouter)

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`app listening at port ${port}`)
    })
})
