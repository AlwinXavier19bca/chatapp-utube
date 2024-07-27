import { useState } from 'react'
import './App.css'
import { Login } from './login/Login'
import { SignUp } from './signup/SignUp'
import { Home } from './home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
