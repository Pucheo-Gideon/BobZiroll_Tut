import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function BoxShow(){

    const [squares, setSquares] = React.useState(boxes)

    const handleClick = (id) => {
        console.log(id)
        // setSquares(prevItem => {
        //     return{ ...prevItem, on: !prevItem.on}
        // })
    }
    

    const squareElement = squares.map(square => <Box on={square.on} id={square.id} clicked={handleClick} key={square.id}/> )
    return(
        <>
        {squareElement}
        </>
    )
}