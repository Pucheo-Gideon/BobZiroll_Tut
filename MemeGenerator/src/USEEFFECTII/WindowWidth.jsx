import React from "react";
import WindowShow from "./WindowShow";
import "./Window.css"

export function WindowWidth (){

    const[show, setShow] = React.useState(true)

    const toggle = ()=> {
        setShow(prevState => !prevState)
    }
    return(
        <div className="container">
            <button onClick={toggle}>{show? "Hide window width": "Show window width"}</button>
           {show && <WindowShow/>}
        </div>
    )
}