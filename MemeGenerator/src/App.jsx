import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Body } from './Components/Body'
import { AddItem } from './ComponentsII/addItem'
import { Apps } from './Components/Random'
import ObjectInState from './Components/ObjectsInState'
import CountImage from './ComponentsIII/CountImage'
import NothingMuch from './ComponentsIII/NothingMuch'
import Count from './ComponentsIV/Count'
import C_Card from './ComponentsV/Card'
import TodoList from './ComponentsII/TodoList'
import Display from './ComponentsVI/display'
import DisplayBoxes from './ComponentsVII/displayBox'
import BoxShow from './ComponentsVIII/BoxDisplay'
import BoxDisplay from './ComponentsVIIII/BoxDisplay'
import ShowJokes from './ComponentsX/ShowJokes'
import Messages from './ComponentXX/messages'
import Jokers from './ComponentXXX/Jokes'
import Forms from './Form/forms'
import Form_I from './FormI/Forms'
import { FormsII } from './FormII/Forms'
import { DataForm } from './FormIII/Data'
import { UseEffect } from './UseEffect/practice'
import { WindowWidth } from './USEEFFECTII/WindowWidth'
import Boxes  from './ComponentsXI/boxes'
import { NavBar } from './DarkMode/Navbar'
import { Main } from './DarkMode/Main'
import React from 'react'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  const toggleMode = ()=>{
    setDarkMode(prevMode=> !prevMode)
  }
  return (
    <div className="App">
       {/* <Header/>
      <Body/>  */}
      {/* <WindowWidth/> */}
      {/* <Boxes/> */}
      <NavBar darkMode={darkMode} toggleMode={toggleMode}/>
      <Main darkMode ={darkMode} />
      {/* <UseEffect/> */}
      {/* <NothingMuch/> */}
      {/* <AddItem/> */}
      {/* <Apps/> */}
      {/* <ObjectInState/> */}
      {/* <CountImage/> */}
      {/* <Count/> */}
      {/* <C_Card/> */}
      {/* <TodoList /> */}
      {/* <Display /> */}
      {/* <DisplayBoxes/> */}
      {/* <BoxShow/> */}
      {/* <BoxDisplay/> */}
      {/* <Messages/> */}
      {/* <ShowJokes/> */}
      {/* <Jokers/> */}
      {/* <Forms/> */}
      {/* <Form_I/> */}
      {/* <FormsII/> */}
      {/* <DataForm/> */}
    </div>
  )
}

export default App
