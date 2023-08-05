import React from "react";
import '../App.css'

const Navbar = () => {

    return(
        <div className="navbar">
            <img src="./image/globe.png" alt="globe" className="navbar--image"/>
            <h3 className="navbar--text">my travel journal</h3>
        </div>
    )
}

export {Navbar}