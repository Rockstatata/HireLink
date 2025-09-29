import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginSignUp from './Pages/LoginSignUp'
import CompanyOnboarding from './components/LoginSignup/CompanyOnboarding'
import UserOnboarding from './components/LoginSignup/UserOnboarding'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserOnboarding />
      </div>
    </>
  )
}

export default App
