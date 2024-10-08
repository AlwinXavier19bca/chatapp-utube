import React from 'react'

export const Conversation = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="dfsdfs" alt="" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between"> 
                <p className='font-bold text-gray-200'>singam</p>
                <span className='text-xl'>✌</span>
            </div>
        </div>
    </div>
  )
}
