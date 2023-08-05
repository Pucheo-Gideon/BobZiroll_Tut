import React from "react";
import boxes from "./boxes";
import "../ComponentsVI/box.css"
import Box from "../ComponentsVI/box"

export default function Display(){

    const [squares, setSquares] = React.useState(boxes)

    const toggle = (id) => {
       // console.log(id)
    
    setSquares(prevState => {
        return prevState.map(square => {
            return square.id===id? {...square, on: !square.on}: square
        })
    })
    }
   
    const squareElements = squares.map((square) => (
      <Box handleToggle={()=>toggle(square.id)} on={square.on} key={square.id} />
    ));
    return(
        <>
        {squareElements}
        </>
    )
}