import React from 'react'
import { useParams } from 'react-router-dom'
const NoteDetailPage = () => {
    const params = useParams()
  return (
    <div>
      Note {params.noteId}
    </div>
  )
}

export default NoteDetailPage
