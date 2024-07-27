import React from 'react'
import { Messages } from './Messages'

export const MessageContainer = () => {
  return (
    <div className='md-min-w-[450px] flex-col'>
        <>
        {/* HEADER */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To</span>
            <span>John Doe</span>
        </div>

        <Messages />
        {/* <MessageInput /> */}
        </>
    </div>
  )
}
