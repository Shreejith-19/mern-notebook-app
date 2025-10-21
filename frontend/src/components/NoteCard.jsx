import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import axios from "axios"
import toast from 'react-hot-toast'

//when we click on the note it should take us to the notesdetail so we return a link
const NoteCard = ({note, setNotes}) => {
    const handleDelete = async(e, id)=>{
    e.preventDefault()// to prevent going to notesdetail
    //ask for confirmation
    if(!window.confirm("Are you sure you want to delete this note?")) return
    try {
        await axios.delete(`http://localhost:5000/api/notes/${id}`)
        setNotes((prev)=>prev.filter(note => note._id !== id))//filter out the newly deleted note
        toast.success("Note deleted")
    } catch (error) {
        console.error(error)
        toast.error("Failed to delete Note.")
    }
}
  return (
    <Link to = {`notes/${note._id}`} className='card bg-base-100 hove:shadow-lg transition-all duration-200 border-t-4 border-solid border-pink-500'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                {formatDate(new Date(note.createdAt))}</span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-sm text-error' onClick={(e)=>handleDelete(e, note._id)}>
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>
            </div>

        </div>
    </Link>
  )
}

export default NoteCard
