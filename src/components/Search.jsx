import React from 'react'
import { IoMdSearch } from "react-icons/io";

function Search({handleSearchText}) {
  return (
    <div className='flex items-center w-full rounded-lg m-3 ml-0 bg-slate-300 pl-2'>
        <IoMdSearch size='35px' className=' h-10 w-10'/>
        <input type="text"  onChange={(event)=>handleSearchText(event.target.value) } placeholder='Search note...' className='rounded-md m-3 w-[600px] p-2' />
    </div>
  )
}

export default Search