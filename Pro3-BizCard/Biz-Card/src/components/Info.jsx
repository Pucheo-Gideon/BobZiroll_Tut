import React from "react";
import Bio from "./Bio";

export default function Info(){
   
   return(
    //    <div>
        <section className="Info">
        <h3 id="info-name">Gideon Oquongudo</h3>
        <h4 id="info-title">Frontend Developer</h4>
        <h5 id="info-website">www.pucheocodes.com</h5>
        
        <div className="emailLinkedIn">
        <button id="email"><h5>email</h5></button>
        <button id="linkedIn"><h5>linkedIn</h5></button>
        </div>
        <Bio/>
        </section>
        // </div>
   )
}