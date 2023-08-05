// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Header from "./Header";
import Main from './project2/components/Main';
import Navbar from './project2/components/NavBar';
// import "./project2/components/"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
      <Navbar/>
      <Main/>
      {/* <Header />
      <MainContent />
      <Footer /> */}
    </div>
    </div>
  )
}

export default App
