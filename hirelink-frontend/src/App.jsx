import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from "./Routes/AllRoutes";
import LoginSignUp from './Pages/LoginSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AllRoutes />
      </div>
    </>
  )
}

export default App
