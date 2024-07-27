import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500'>ChatApp</span>
            </h1>
        </div>
        <form className='bg-white'>
        <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>full name</span>
                </label>
                <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="password" placeholder='Enter confirm password' className='w-full input input-bordered h-10' />
            </div>

            <GenderCheckbox />


            <a href="#"> Already have account?</a>
            <div>
                <button className='btn btn-block btn-sm mt-2'> Sign Up </button>
            </div>
        </form>
    </div>
  )
}

export default SignUp