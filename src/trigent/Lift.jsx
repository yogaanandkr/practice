import React, { useState } from "react";
import LiftChild from "./LiftChild";

function Lift() {
  let [data, setData] = useState();
  let call = data => {
    setData(data);
  };
  return (
    <div>
      <h1>{data}</h1>
      <LiftChild call={call} />
    </div>
  );
}

export default Lift;
