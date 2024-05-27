import React, { createContext } from "react";
import ChildContext from "./ChildContext";
let myContext = createContext();

function Context() {
  return (
    // <myContext.Provider value={"omen"}>
      <ChildContext></ChildContext>
    // </myContext.Provider>
  );
}

export { Context, myContext };
