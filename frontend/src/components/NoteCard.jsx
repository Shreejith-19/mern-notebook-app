import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
//when we click on the note it should take us to the notesdetail so we return a link
const NoteCard = ({note}) => {
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
                    <button className='btn btn-ghost btn-sm text-error'>
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>
            </div>

        </div>
    </Link>
  )
}

export default NoteCard
