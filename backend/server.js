import express from "express"
import notesRouter from "./src/routes/notesRoute.js"
import { connectDB } from "./src/config/connectDB.js"
const app = express()
const port = 5000

connectDB()

app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
})

// 