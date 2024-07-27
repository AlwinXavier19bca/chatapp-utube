import React from 'react'
import { IoSearchSharp } from "react-icons/io5"

export const SearchBar = () => {
  return (
    <form action="#" className='flex items-center gap-2'>
        <input type="text" className="p-2 grow input input-bordered rounded-full" placeholder="Search"/>
        <button type='submit' className='btn btn-circle rounded-full'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}
