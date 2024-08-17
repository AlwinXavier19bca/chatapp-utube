import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { MessagesSceleton } from './MessagesSceleton'
import useListenMessage from '../../hooks/useListenMessage'

export const Messages = () => {
  const {loading, messages} = useGetMessages()
  useListenMessage()
  const lastMessageRef = useRef()

  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && messages.length > 0 && <MessagesSceleton />}
        {!loading && messages.length == 0 && (
          <p className='text-center captalize font-white'>
            send a message to start the conversation
          </p>
        )}
        {!loading && messages.length > 0 && messages.map((message) =>(
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  )
}
