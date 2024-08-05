import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthcontext } from '../context/AuthContext'


export const uselogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthcontext()

  const login = async ( username, password ) => {
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem('chat-user', JSON.stringify(data))
      setAuthUser(data)
      toast.success('logged in successfully')
    } catch (error) {
        toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }
  return { loading, login }
}
