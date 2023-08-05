import React from "react";
import memesData from "../Components/memesData";


export default function (){

    
    let newData = memesData.data.memes
    let getRandom = Math.floor(Math.random() * newData.length)

    let [getUrl, setGetUrl] = React.useState("")
    console.log(getUrl)
    // let getUrl
    const onClickGetUrl = () => {
        setGetUrl(newData[getRandom].url);
        // let getUrl = 
        // console.log(getUrl)
    }
    return(
        <div style={{ backgroundColor: "black", height: "100px", width: "100px"}} onClick={onClickGetUrl}>
           <img src={getUrl}/>
        </div>
    )
}