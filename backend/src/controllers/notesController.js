export async function getNotes(req, res){
    return res.status(200).send("You got the notes")
}

export async function createNotes(req, res){
    return res.status(201).json({"meassage":"Notes created"})
}

export async function updateNotes(req, res){
    return res.status(200).json({"meassage":"Notes Updated"}) 
}

export async function deleteNotes(req, res){
    return res.status(200).json({"meassage":"Notes Deleted"})
}