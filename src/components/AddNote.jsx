import { IoIosAddCircle } from "react-icons/io";
import '../App.css'
import React, { useState } from 'react'

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const characterLimit = 200;

  const handleChange = (event) => { 
   if(characterLimit - event.target.value.length >=0 ){

    
     setNoteText(event.target.value);
   }

  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className='text-wrap bg-yellow-400 mb-10 flex justify-between flex-col rounded-md p-3 min-h-190px'>
      <textarea
        onChange={handleChange}
        value={noteText}
        rows="6"
        cols="20"
        placeholder='Type...'
        className=' text-wrap outline-none resize-none bg-yellow-400 border-solid border-2 border-gray-500 rounded-md placeholder:text-gray-700'
      ></textarea>
      <div className='flex justify-between'>
        <small>
          {characterLimit - noteText.length}
        </small>
        <IoIosAddCircle className='size-6' onClick={handleSaveClick} />
      </div>
    </div>
  )
}

export default AddNote;