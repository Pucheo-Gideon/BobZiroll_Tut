import React from "react";
import '../ComponentsVIIII/css.css'

export default function Box(props){
console.log(props)

    const styles = {
        backgroundColor: props.on? "#ccc" : "#222"
    }
    return(
        <>
        <div style={styles} onClick={()=> props.handleClick(props.id)} className="box"></div>
        </>
    )
}