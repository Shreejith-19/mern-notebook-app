import Navbar from './components/Navbar'
import RateLimit from './components/RateLimit'
import './index.css'
import { useState, useEffect } from 'react'
import NoteCard from './components/NoteCard'
import axios from "axios"
const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false)
  const [notes, setNotes] = useState([])//for fetching notes
  const [loading, setLoading] = useState(true)//to show loading

  //for fetching the notes
  useEffect(()=>{
    const fetchNotes = async()=>{
      try{
        //sends a GET request
        const res = await axios.get("http://localhost:5000/api/notes")
        setNotes(res.data)//update the notes
        console.log(res.data)
        setRateLimited(false)//if u can get the data u are not rate-limited
      }catch(error){
        console.log("Error fetching data")
        if(error.response.status === 429){
          setRateLimited(true)
        }else{
          console.error(error)
        }
      }finally{// error or success loading = false
        setLoading(false)
      }
    }
    fetchNotes()
  },[])
  return (
    <div data-theme = "dracula" className = "min-h-screen">
      <Navbar/>
      {isRateLimited && <RateLimit/>}
      <div className='max-w-7xl max-auto p-4 mt-6'>

        {loading && <div className='text-center text-primary py-10'>Loading...</div>}

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note)=>(
              <NoteCard key = {note._id} note = {note} setNotes = {setNotes}/>//pass setNotes for update after delete
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default HomePage
