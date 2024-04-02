import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

function Note({ id, text, date, handleDeleteNote } ) {

  return (
    <div className=' text-pretty whitespace-pre-wrap bg-blue-300 mb-[10px] flex justify-between flex-col  rounded-md p-3 min-h-[190px]'>
        <span className='text-pretty' style={{ overflowWrap: 'break-word' }}>{text}</span>
        <div className='justify-between flex items-center'>
            <small>{date}</small>
            <FaDeleteLeft  className='size-[1.3em]' onClick={()=> handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note