import React from "react";
import boxesData from "./boxesData";
import ShowBoxes from "./boxesShow";

export default function Boxes (){

    const [boxes, setBoxes] = React.useState(boxesData)

    const handleToggle = (id)=> {
        setBoxes(prevSquare => {
            return prevSquare.map(square => {
                return square.id===id? {...square, on: !square.on} : square
            })
    })
    }
    let squareElement = boxes.map(box => <ShowBoxes toggle={()=>handleToggle(box.id)}  key={box.id} boxOn ={box.on}/>)
    return(
        <div>
            {squareElement}
        </div>
    )
}