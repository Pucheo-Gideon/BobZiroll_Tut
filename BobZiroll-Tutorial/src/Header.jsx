import React from "react";
import image from "./assets/react-logo.png"

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={image} className="image" />
        <ul className="inline_block">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
