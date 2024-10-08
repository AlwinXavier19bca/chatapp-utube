import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='form-control'> 
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span>
                <input type="checkbox" name="" id="" className='check-box border-slate-900'/>
            </label>
        </div>
        <div className='form-control'> 
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span>
                <input type="checkbox" name="" id="" className='check-box border-slate-900'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox