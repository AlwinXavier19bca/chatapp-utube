import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import uselogout from '../../hooks/uselogout'

export const LogoutButton = () => {
  const {loading, logout}= uselogout()
  return (
    <div className='mt-auto'>
      { !loading ? (<BiLogOut 
      onClick={logout}
      />) : (
        <span className='loading loading-spinner'></span>
      )}
      </div>
  )
}
