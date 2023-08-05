import React from "react";
import boxes from "./boxes";
import "../ComponentsVII/box.css"
import Box from "./box";

export default function DisplayBoxes (){

    const [squares, setSquares] = React.useState(boxes)

    console.log(squares)

    const squareElement = squares.map(square => <Box on={square.on} key={square.id}/>)
    return(
        <div>
            {squareElement}
        </div>
    )
}