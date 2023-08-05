import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import travelJournalEntries from "../Data";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";

function App() {
  const Data = travelJournalEntries;
  console.log(Data);

  return (
    <>
    <Navbar/>
      <section className="app">
        {Data.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </section>
    </>
  );
}

export default App;
