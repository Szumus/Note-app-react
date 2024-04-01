import { useState } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import {nanoid} from 'nanoid'

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


  return (
    <div className='max-w-[960px] mx-auto px-4'>
      <NoteList notes={notes}/>
      
    </div>
  )
}

export default App
