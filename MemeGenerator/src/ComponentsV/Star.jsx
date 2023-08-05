
import React from "react";
import "../ComponentsV/Card.css";

export default function Star (props){

    const {isAvailable, handleClick} = props

    const starIcon = isAvailable? "star-filled.png": "star-empty.png"
    return (
      <img
        src={`../images/${starIcon}`}
        className="card--favorite"
        onClick={handleClick}
      />
    )
}