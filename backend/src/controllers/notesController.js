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
    return res.status(200).json({"meassage":"Notes Updated"}) 
}

export async function deleteNotes(req, res){
    return res.status(200).json({"meassage":"Notes Deleted"})
}