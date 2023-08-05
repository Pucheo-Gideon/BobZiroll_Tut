import React from "react";
import { PracticeII } from "./practiceII";
import './useeffect.css'

export const PracticeShow =()=>{

    const [show, setShow] = React.useState(true)

    const toggle = ()=>{
        setShow(prevState => !prevState)
    }
    
    return(
        <div className="container">
            <button onClick={toggle}>Display</button>
            {show && <PracticeII/>}
        </div>
    )
}