import React from "react";
import JokesData from "./JokesData";
import '../ComponentXXX/jokes.css'
import JokesCard from "./JokesCard";
export default function Jokers() {

    const [jokes, setJokes] = React.useState(JokesData)

    const jokesElement = jokes.map(joke=> <JokesCard setup={joke.setup} key={joke.id}  id={joke.id} punchline={joke.punchline}/>)

    return(
        <div>
            {jokesElement}
        </div>
    )
}