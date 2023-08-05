import React from "react";


export default function Box (props){

    console.log({props})
 const styles = {
   backgroundColor: props.on ? "#ccc" : "#222",
 };
    return (
      <>
        <div style={styles} onClick={props.handleToggle} className="box" ></div>
      </>
    );
}