import React from "react";
import JokesData from "./JokesData";
import Jokes from "./Jokes";

export default function ShowJokes (){

    // const [jokes, setJokes]= React.useState(JokesData)
    

    const joked = JokesData.map(joke => <Jokes punchline={joke.punchline} setup={joke.setup} key={joke.id}/>)
    return(
        <>
        {joked}
        </>
    )
}