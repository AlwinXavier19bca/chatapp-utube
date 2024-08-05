import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useGetConversations from '../../hooks/useGetConversations'
import useConversation from '../../zustand/useConversation'
import toast from 'react-hot-toast'

export const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return

    const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()))
    if (!conversation) return toast.error('No such user found')

    setSelectedConversation(conversation)
    setSearch('')
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}
