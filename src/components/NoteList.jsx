import Note from './Note'
import AddNote from './AddNote'

function NoteList({notes, handleAddNote , addNote, handleDeleteNote}) {
  return (
    <div className='grid gap-4 grid-cols-4  '>
        {notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList
