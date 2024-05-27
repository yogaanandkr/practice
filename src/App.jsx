import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeText":
      return { ...state, text: "vetrivel Murugaa" };
    case "showText":
      return { ...state, show: !state.show };
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, {
    text: "Murugaa",
    show: true,
  });
  return (
    <>
      <button
        onClick={() => {
          setState({ type: "changeText" });
          setState({ type: "showText" });
        }}
      >
        Change / Show text
      </button>
      {state.show && <h1>{state.text}</h1>}
    </>
  );
};

export default App;
