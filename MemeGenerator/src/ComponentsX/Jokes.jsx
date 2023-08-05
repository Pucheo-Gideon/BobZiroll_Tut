import React from "react";


export default function Jokes (props){


    const [isShown, setIsShown] = React.useState(false)

    const toggleState = ()=> {
        console.log(isShown)
        setIsShown(prevState => !prevState)
    }

    // const showPunchline = isShown? <p>{props.punchline}</p> : ""
    return (
      <div>
        { props.setup && <h2>{props.setup}</h2>}
        {isShown && <p>{props.punchline}</p>}
        {/* { isShown?
        <button onClick={toggleState}>Hide Punchline</button>:
        <button onClick={toggleState}>Show Punchline</button>} */}
        <button onClick={toggleState}>{isShown? "Show" : "Hide"} Punchline</button>
        <hr />
      </div>
    );
}