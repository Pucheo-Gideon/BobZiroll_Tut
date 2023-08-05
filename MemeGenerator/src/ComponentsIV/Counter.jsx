import React from "react";
import "../ComponentsIV/Count.css";

export default function Counter(props) {
  const { number } = props;
  return (
    <div className="counter--count">
      <h1>{number}</h1>
    </div>
  );
}