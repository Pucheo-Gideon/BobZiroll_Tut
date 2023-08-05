import React from "react";
import Boxes from "./Boxes";
import Box from "./Box";
export default function BoxDisplay(){

    const [squares, setSquares] = React.useState(Boxes)

    const toggle = (id) => {
        console.log(id)
        setSquares(prevState => {
            return prevState.map(square=>{
                return square.id ===id? {...square, on:!square.on}: square
            })
        })
    }

    const squareElement = squares.map(square => <Box key={square.id} handleClick={toggle} id={square.id} on={square.on}/>)
    return(
        <>
        {squareElement}
        </>
    )
}