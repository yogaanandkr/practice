import React, { useReducer, useRef } from "react";
import { Link } from "react-router-dom";
const Usereducer = () => {
  const myRef = useRef(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "marry":
        return { ...state, wife: "Sushmita" };
    }
  };
  let [state, setState] = useReducer(reducer, {
    name: "Yoga Anand",
    wife: null,
  });

  const handleClick = e => {
    console.log(e);
    setState({ type: "marry" });
    console.log("this is my ref", myRef.current);
  };
  return (
    <>
      <h1>
        {state.name} weds {state.wife ? state.wife : "?"}{" "}
        {state.wife ? <span style={{ color: "red" }}>&#9829;</span> : ""}
      </h1>
      <button onClick={handleClick}>change</button>
      <Link to="/prods">
        <button>prods</button>
      </Link>
    </>
  );
};

export default Usereducer;
