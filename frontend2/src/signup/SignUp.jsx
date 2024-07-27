import React from 'react'
import { CheckBox } from './CheckBox'

export const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
        <div className='w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                {/* GENDER BOX */}
                <CheckBox />
                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </a>
                <div className=''>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}
