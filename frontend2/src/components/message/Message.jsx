import React from 'react'
import { useAuthcontext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { displayTime } from '../../utils/displayTime'

const Message = ({message}) => {

  const {authUser} = useAuthcontext()
  const {selectedConversation}= useConversation()
  const fromMe = message.senderId == authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleColor = fromMe ? 'bg-blue-500': 'bg-gray-500'
  return (
    <div className={`chat ${chatClassName} `}>
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic} />
        </div>
    </div>
    <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
    <div className="chat-footer opacity-50 flex gap-1 items-center">{displayTime(message.createdAt)}</div>
    </div>
  )
}

export default Message