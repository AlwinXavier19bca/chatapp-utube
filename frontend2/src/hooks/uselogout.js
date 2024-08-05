import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthcontext } from '../context/AuthContext'

const uselogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthcontext()

  const logout = async () => {
    setLoading(true)
    try {

        const res = await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json()
        if(data.error) {
            console.log(res)
            throw new Error(data)
        }

        localStorage.removeItem('chat-user')
        setAuthUser(null)
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }finally {
        setLoading(false)
    }
  }

  return { logout, loading }
}

export default uselogout