import React from "react";
import "./dark.css"

export function NavBar(props) {
  return (
    <nav className={props.darkMode? "dark": ""}>
        <p>Dark/Light Mode </p>
      <div className="toggle-wrapper">
        <p className="toggle-light">Light</p>
        <div className="toggle-slider-left-right">
          <div className="toggle-circle" onClick={props.toggleMode}></div>
        </div>
        <p className="toggle-dark">Dark</p>
      </div>
    </nav>
  );
}
