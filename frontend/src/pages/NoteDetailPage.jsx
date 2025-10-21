import axios from 'axios'
import { ArrowLeftIcon, LoaderIcon, TrashIcon } from 'lucide-react'
import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import { useParams, useNavigate, Link } from 'react-router'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const id = params.noteId
  useEffect(()=>{
    const fetchNote = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.error(error)
        toast.error("failed to fetch!")
      }finally{
        setLoading(false)
      }
    }
    fetchNote()
  },[id])

  const handleDelete = async()=>{
    //
  }
  const handleSave = async()=>{
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Missing Fields")
      return
    }
  }
  if (loading){
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }
  return (
   <div data-theme = "dracula" className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex items-center justify-between mb-6'>
          <Link to = "/" className='btn btn-ghost'>
        <ArrowLeftIcon className='h-5 w-5'/>
        Back to Notes
        </Link>
        <button onClick={handleDelete} className='btn btn-error btn-outline'>
          <TrashIcon className='h-5 w-5'/>
        Delete Note
        </button>
        </div>
        <div className='card bg-base-100'>
          <div className="card-body">
            <div className='from-control mb-4'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input type = "text" placeholder='Note Title' className='input input-bordered' value = {note.title} onChange={(e)=> setNote({...note, title: e.target.value})}/> 
            </div>
            <div className='from-control mb-4'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea placeholder='Write your note here...' className='textarea textarea-bordered h-32 w-80' value = {note.content} onChange={(e)=> setNote({...note, title: e.target.value})}/> 
            
            </div>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary' disabled = {saving} onClick = {handleSave}>
                {saving? "Saving...":"Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default NoteDetailPage
