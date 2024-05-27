import React, { useReducer } from "react";
import Usereducer from "../Usereducer";

function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return { ...state, pos: state.pos + 1 };
      case "minus":
        return { ...state, neg: state.neg - 1 };
      case "reset":
        return { ...state, pos: 0, neg: 0 };
      default:
        return state;
    }
  };
  let [state, setState] = useReducer(reducer, { pos: 0, neg: 0 });
  return (
    <div>
      <h1>
        {state.pos}{" "}
        <button onClick={() => setState({ type: "plus" })}>Pos +</button>
      </h1>
      <h1>
        {state.neg}{" "}
        <button onClick={() => setState({ type: "minus" })}>Neg -</button>
      </h1>
      <button onClick={() => setState({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Reducer;
