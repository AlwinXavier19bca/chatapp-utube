import { createContext, useEffect, useState, useContext } from "react";
import { useAuthcontext } from "./AuthContext";
import { io } from 'socket.io-client'

const SoketContext = createContext()

export const useSocketContext = () => {
    return useContext(SoketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser}= useAuthcontext()

    useEffect(() =>{
        if(authUser) {
            const socket = io('http://localhost:8000', {
                query: {
                    userId: authUser._id
                }
            })

            setSocket(socket)

            socket.on('getOnlineUser', (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        }else {
            if(socket){
            socket.close()
            setSocket(null)
            }
        }
    }, [authUser]);

    return <SoketContext.Provider value={{socket, onlineUsers}}>
        {children}
        </SoketContext.Provider>
}