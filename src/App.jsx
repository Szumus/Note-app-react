import './App.css'
import NoteList from './components/NoteList'
import {nanoid} from 'nanoid'
import { useState } from 'react';
import Search from './components/Search';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "text",
      date: "01/04/2024",
    },
    {
      id: nanoid(),
      text: "text2",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "text3",
      date: "03/04/2024",
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote =(id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);

  }

  const [searchText, setSearchText] = useState('')

  return (
    <div className='max-w-[960px] mx-auto px-4'>
      <Search handleSearchText={setSearchText}/>
      <NoteList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText) )} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      
    </div>
  )
}

export default App

