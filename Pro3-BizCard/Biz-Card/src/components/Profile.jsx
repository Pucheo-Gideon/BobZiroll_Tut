import React from "react"
import myPics from '../Images/my.png'

export default function Profile(){
    
    return(
        <div>
            <img src={myPics} alt="" className="profile-image"/>
        </div>
    )
}