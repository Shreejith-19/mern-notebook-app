import express from "express"
const router = express.Router()

router.route("/")
    .get((req, res)=>{
        res.status(200).send("hello from router")
    })
    
router.route("/:id")
    .get((req, res)=>{
        res.status(200).send(`hello ${req.params.id}`) 
    })

export default router