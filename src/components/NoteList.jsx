import React from 'react'
import Note from './Note'

function NoteList({notes}) {
  return (
    <div className='grid gap-4 grid-cols-4 '>
        {notes.map((note) => <Note id={note.id} text={note.text} date={note.date}/>)}
        
    </div>
  )
}

export default NoteList