import React from "react";
import "./useeffect.css"

export const PracticeII = () => {

    const[windowWidth, setWindowWidth] =React.useState(window.innerWidth)

    React.useEffect(()=>{
        function watchWidth(){
            console.log("setting up...")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        
        return function (){
            console.log("cleaning up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return <h1>{windowWidth}</h1>
}