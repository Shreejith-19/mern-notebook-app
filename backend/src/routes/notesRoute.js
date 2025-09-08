import express from "express"
import { createNotes, deleteNotes, getNoteByID, getNotes, updateNotes } from "../controllers/notesController.js"
const router = express.Router()

router.route("/")
    .get(getNotes)
    .post(createNotes)

router.route("/:id")
    .get(getNoteByID)
    .put(updateNotes)
    .delete(deleteNotes)

export default router