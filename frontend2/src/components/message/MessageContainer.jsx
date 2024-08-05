import React from 'react'
import { Messages } from './Messages'
import { MessageInput } from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { AuthContext, useAuthcontext } from '../../context/AuthContext'
import { useEffect } from 'react'

export const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()
    useEffect(()=>{
        return ()=> setSelectedConversation(null)
    }, [setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        { !selectedConversation ? <NoChatSelected /> : (
            <>
            {/* HEADER */}
            <div className='bg-slate-400 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
    
            <Messages />
            <MessageInput />
            </>
        )}
    </div>
  )
}

const NoChatSelected = () => {
    const {authUser} = useAuthcontext()
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className="px-4 text-center sm:text-lg text-gray-200 font-semibold flex flex-col items-center justify-center gap-2">
                <p>Welcome da {authUser.fullName}</p>
                <p>select a chat to start messaging</p>
            </div>
        </div>
    )
}