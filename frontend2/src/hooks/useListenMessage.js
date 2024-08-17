import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation'

const useListenMessage = () => {
    const {socket} = useSocketContext()
    const {messages, setMessages} = useConversation()

    useEffect(() => {
        socket?.on('newMessage', (message) => {
            setMessages([...messages, message])
        })

        return () => socket?.off('newMessage') // Clean up the event listener on unmount

    }, [socket, messages, setMessages])
}

export default useListenMessage