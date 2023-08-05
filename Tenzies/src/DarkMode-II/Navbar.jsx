import React from "react";
import "./darkmode.css"
export function NavbarDark(props) {
    console.log(props)
 return (
   <nav className={props.darkMode ? "dark" : ""}>
     <p>Light/DarkMode</p>
     <div className="toggle-wrapper">
       <p>Light</p>
       <div className="toggle-slider-left-right">
         <div className="toggle-circle" onClick={props.toggleMode}></div>
       </div>
       <p>Dark</p>
     </div>
   </nav>
 );
}
