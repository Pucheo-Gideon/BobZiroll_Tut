import React from "react";
import "../ComponentsVIII/box.css"

export default function Box (props){

    console.log(props.id)

    const styles = {
        backgroundColor: props.on? "#ccc": "#222"
    }
    return (
      <>
        <div style={styles} onClick={()=> props.clicked(props.id)} className="box"></div>
      </>
    );
}