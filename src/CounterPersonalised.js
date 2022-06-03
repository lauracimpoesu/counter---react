import React, { useState } from "react";

export default function CounterPersonalised({ initialCount }) {
  const [count, setCount] = useState(initialCount); //& instead of using a full object, we can make our state A SINGLE NUMBER THAT is JUST THE COUNT
  //^ something that is nice with Hooks, is that we can use whatever we want for our state
  //& this may be very USEFUL because it means that if we want we can BREAK OUR STATE in the futuro INTO MULTIPLE DIFFERENT VARIABLES

  return (
    <div className="container">
      <h1>
        COUNTER <br /> <span className="h3">H o o k s</span>
      </h1>
      <button
        onClick={() =>
          setCount((prevCount) => prevCount - 1)
        } /* instead of using a full Object we're just using a SINGLE Number */
      >
        -
      </button>
      <span> {count} </span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}


/* 
 Where Hooks are STORED?
 Well, they RELY on the fact that they are TOP-LEVEL Functions
 So they ALWAYS HAVE to be CALLED/declared/put in the TOP LEVEL of the Component;
 meaning right above the return(). 
 We cannot put an if statement, or whatever else function before a Hook #likeNever.
 
 */