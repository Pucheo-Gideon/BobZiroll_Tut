import React from "react";

export default function JokesCard (props){

    // const [punchline, setPunchline] = React.useState(false)

    // const handlePunchline = () => {
    //     setPunchline(prevState => !prevState)
    // }
    
    const [punchline, setPunchline] = React.useState(false);

    const handlePunchline = () => {
      console.log(punchline);
      setPunchline((prevState) => !prevState);
    };

    const getID = (id) => {
        console.log(id)
    }
    
    // const styles = {
    //     backgroundColor: props.id%2===0? "green": ""
    // }
    return(
        <div  onClick={()=>getID(props.id)}>
            {props.setup && <h1>{props.setup}</h1>}
            {punchline?<p>{props.punchline}</p>: ""}
           {props.setup && <button onClick={handlePunchline}>{punchline? "Hide": "Show" } Punchline</button>}
            <hr/>
        </div>
    )
}