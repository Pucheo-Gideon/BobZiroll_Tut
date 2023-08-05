import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './DarkMode/Navbar'
import { Main } from './DarkMode/Main'
// import { NavBar_II } from './DarkMode-I/Navbar'
// import { Main_II } from './DarkMode-I/Main'
import { NavbarDark } from './DarkMode-II/Navbar'
import { MainDark } from './DarkMode-II/MainDark'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = ()=>{
    setDarkMode( prevMode => !prevMode)
  }
  return (
    <div className="App">
    {/* <NavBar darkMode={darkMode} toggleMode={toggleMode}/>
    <Main darkMode={darkMode}/> */}
    {/* <NavBar_II darkMode={darkMode} toggleMode={toggleMode}/>
    <Main_II darkMode={darkMode}/> */}
    <NavbarDark darkMode={darkMode} toggleMode={toggleMode}/>
    <MainDark darkMode={darkMode}/>
    </div>
  )
}

export default App
