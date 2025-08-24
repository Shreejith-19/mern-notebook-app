import express from "express"
import { createNotes, deleteNotes, getNotes, updateNotes } from "../controllers/notesController.js"
const router = express.Router()

router.route("/")
    .get(getNotes)
    .post(createNotes)

router.route("/:id")
    .put(updateNotes)
    .delete(deleteNotes)

export default router