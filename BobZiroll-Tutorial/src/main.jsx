import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ReactDOM.render(<App/>, document.getElementById("root"))


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DisplayFacts/> */}
    <App/>
  </React.StrictMode>
)

// import ReactDOM from "react-dom/client";
// import React from "react";

// let h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append("h1");
// console.log(h1);
// Example One


// const navs = (
//   <nav>
//     <h1>LeadStar Consult</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )


// ReactDOM.render(navs, document.getElementById("root"));

// Example II
// const appendDiv = (
//   <div>
//     <h1>Hi. My name is Gideon</h1>
//     <h2>I love thinking through Logic</h2>
//     <h3>I deploy this aptitude by writing codes</h3>
//     <h4>
//       End goal is to think of a problem I can solve, thereby creating a Unicorn.
//     </h4>
//   </div>
// );

// document.getElementById("root").append(JSON.stringify(appendDiv));

// ReactDOM.createRoot(document.getElementById("root")).render(navs);
// ReactDOM.render()is to take a JSX(react elements) written inside Javascript
// and interpret them in a way that turns them into real DOM or HTML elements 
// That the browser can understand.

// Example II

// const slide = (
//   <div>
//     <img src="react-logo.png" width="40px" />
//     <h1> Fun Facts about React</h1>
//     <ul>
//       <li>Was first release in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );
