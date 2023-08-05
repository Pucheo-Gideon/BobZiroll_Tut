import React from "react";

export function UseEffect(){

    console.log("This component just rendered")
    const[starWars, setStarWars] = React.useState({})
    const [count, setCount] = React.useState(4)

    React.useEffect(()=>{

        fetch("https://swapi.dev/api/people/" + count)
        .then(res => res.json())
        // .then(data => console.log(data))
        // .then(data => setCount(data))
        .then(data => setStarWars(data))
        console.log("Effect rendered!")
    }, [count])

    console.log(count)
    // console.log("This is from Star wars", starWars)

    return(
        <div>
            <h2>This is the count{count}</h2>
            <button onClick={()=>setCount(prevState => prevState + 1)}>Get Next Character</button>
        </div>
    )
}