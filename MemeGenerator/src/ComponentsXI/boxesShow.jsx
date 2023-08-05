import React from "react";

import "./boxes.css"


export default function ShowBoxes(props){

    console.log(props)
    const style = {
        backgroundColor: props.boxOn? "#222" : "#ccc"
    }

    return <div style={style} onClick={props.toggle} className="box"></div>
}