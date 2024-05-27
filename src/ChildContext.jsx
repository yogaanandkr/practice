import React, { useContext } from "react";
import { myContext } from "./Context";

function ChildContext() {
  let context = useContext(myContext);
  return (
    <>
      <h1>{context}</h1>
    </>
  );
}

export default ChildContext;
