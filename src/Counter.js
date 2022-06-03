import React, { useState } from "react";

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="container">
      <h1>
        COUNTER <br /> <span className="h3">H o o k s</span>
      </h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span> {count} </span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}