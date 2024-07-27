import React from 'react'
import { SideBar } from '../../components/sidebar/SideBar'
import { MessageContainer } from '../../components/messages/MessageContainer'

function Home() {
  return (
    <>
    <div className="flex justify-center items-center gap-4">
      <SideBar />
      <MessageContainer />
    </div>
    </>
    
  )
}

export default Home