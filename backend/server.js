import express from "express"
import notesRouter from "./src/routes/notesRoute.js"
const app = express()
const port = 5000

app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
})