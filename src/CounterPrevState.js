//TODO 1 rfc
//TODO 4 useState import
import React, { useState } from "react"; //& useState Hook imported in order for me to use STATE (like in Classes)

export default function CounterPrevState({ initialCount }) {
  //TODO 3 Object Deconstruction as Props inside the parenthesis
  //TODO 5:
  //~ useState({ count: initialCount }) //& calling the useState function that is going to TAKE our INITIAL STATE (that is an OBJECT with a count: and the initialCount) - so this returns our State. But how do we use this now? :
  //& it RETURNS it as an ARRAY | so we need to DECONSTRUCT that array:
  //! useState Hook STEPS:
  //! 1) Necessity of using useState Hook by importing {useState} after the react import call
  //! 2) DECONSTRUCT THE ARRAY STATE
  //! 2.1) That Array takes TWO Values
  //! 2.2) the 1ST Value is the ACTUAL State
  //! 2.3) the 2ND thing it returns is a FUNCTION that allows us to SET THAT STATE
  const [state, setState] = useState({ count: initialCount }); //! initialCount being the PROP i passed to the COUNTER placed on App.js
  //! The PARAMENTER of the useState above is the DEFAULT State #ALWAYSjustTheDefaultState (we will change it DYNAMICALLY later)

  return (
    <div className="container">
      {" "}
      {/* TODO 2 build the Container component as we want it to be (in RAW non-dynamic CODE) */}
      <h1>
        COUNTER <br /> <span className="h3">H o o k s</span>
      </h1>
      <button
        onClick={() =>
          setState((prevState) => {
            return { count: prevState.count - 1 };
          })
        }
      >
        -
      </button>{" "}
      {/* TODO 7
      STARTing to USE that State by ADDing an EVENT LISTENER (the OnClick)
      CALLING a SPECIFIC FUNCTION ON the onClick. This Function is THE setState of the useState;
      SETting our NEW STATE in a way that COUNTS +1 for the Plus Button and -1 for the Minus Button;
      TO DO THAT, INSIDE the setState Function we call the PREVIOUS STATE (because JavaScript is ASYNCHRONOUS) 
      and after the ARROW FUNCTION of the prevState, 
      RETURN the Object with count: that counts the current state (so the current PREVIOUS State - prevState.count) and ADDS + 1 (or decreases of course).
       */}
      <span> {state.count} </span>{" "}
      {/* TODO 6 so here we can ASSIGN/call/PUT THAT STATE we created before - and it's going to display still the initialCount (but as the State #useState); now we're going to USE that State more */}
      <button
        onClick={() =>
          setState((prevState) => {
            return { count: prevState.count + 1 };
          })
        }
      >
        +
      </button>{" "}
      {/* TODO 8 copy-paste the same onClick function, modifyng just the mathematical operator */}
    </div>
  );
}