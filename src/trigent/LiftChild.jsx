import React, { useState } from "react";

function LiftChild({ call }) {
  let [state, setState] = useState("hello from child");

  return (
    <div>
      <button onClick={() => call(state)}>get data</button>
    </div>
  );
}

export default LiftChild;
