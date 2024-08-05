import { useState } from 'react'
import './App.css'
import { Login } from './login/Login'
import { SignUp } from './signup/SignUp'
import { Home } from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuthcontext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {authUser, setAuthUser}= useAuthcontext()


  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
