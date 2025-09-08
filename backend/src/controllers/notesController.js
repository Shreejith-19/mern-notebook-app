import Note from "../models/Note.js"
export async function getNotes(req, res){
    try{
        const notes = await Note.find()//this will fetch all notes in db
        return res.status(200).send(notes)
    }catch(err){
        console.log(`Error in getNodes Controller: ${err}`)
        return res.status(500).json({"message": "Internal server Error"})
    }
}
export async function getNoteByID(req, res){
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({"message":"note does not exist"})
        return res.status(200).send(note)
    } catch (err) {
        console.error(`Error at getNotesById controller ${err}`)
        return res.status(400).json({"message": "unexpected id format"})
    }
}

export async function createNotes(req, res){
    try{
        const body = req.body
        const newNote = new Note({
            title: body.title,
            content: body.content
        })
        await newNote.save()
        return res.status(201).json({"message":"new Note was created"})
    }catch(err){
        console.error(`error in createNotes controller: ${err}`)
        return res.status(400).json({"message": "Bad request"})
    }
}

export async function updateNotes(req, res){
    try {
        const body = req.body
        const reqId = req.params.id
        const updatedNote = await Note.findByIdAndUpdate(reqId, {title: body.title, content: body.content}, {new: true})
        if(!updatedNote){
            return res.status(404).json({"message":`${reqId} does not exist`})
        }
        return res.status(200).json({"message": "Note updated"})
    } catch (err) {
        console.error(`Error at updateNotes controller: ${err}`)
        return res.status(500).json({"message": "Bad Request"})
    }
}

export async function deleteNotes(req, res){
    try {
        const reqId = req.params.id
        const deletedNote = await Note.findByIdAndDelete(reqId)
        if(!deletedNote){
            return res.status(404).json({"message": "id not found"})
        }
        return res.status(200).json({"message": "id deleted successfully"})
    } catch (err) {
        console.error(`Error at deleteNotes controller: ${err}`)
        return res.status(500).json({"message": "Bad request"})
    }
}