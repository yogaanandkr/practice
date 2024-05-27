import React, { useMemo, useState } from "react";

function Callback() {
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let colorChange = useMemo(() => {
    return changeColor();
  }, [first]);
  function changeColor() {
    console.log(first * 2);
    return first * 2;
  }
  return (
    <div>
      <h1>{colorChange}</h1>
      <h1>first : {first}</h1>
      <h1>second : {second}</h1>
      <button onClick={() => setFirst(prevfirst => prevfirst + 1)}>
        {" "}
        first
      </button>
      <button onClick={() => setSecond(prevsecond => prevsecond + 1)}>
        second
      </button>

      <button onClick={changeColor}>Trigger change</button>
    </div>
  );
}

export default Callback;
