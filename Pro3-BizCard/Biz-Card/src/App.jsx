
import './App.css'

import React from "react"
import Profile from "./components/Profile"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function App (){
    
    return(
        <main className="wrapper">
        <Profile/>
        <Info/>
        <Footer/>
        </main>
    )
}
