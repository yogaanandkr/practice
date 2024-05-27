import React, { useCallback, useMemo, useRef, useState } from "react";
import Call2 from "./Call2";
function Callback() {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let myref = useRef();
  let [dummy, setDummy] = useState(0);
  let change1 = () => {
    console.log("one");
    setState1(state1 + 1);
  };

  let change2 = () => {
    console.log("two");
    setState2(state2 + -2);
  };

  //   let changedummy = () => {
  //     setDummy(dummy + 1);
  //   };

  //   let changedummy = useCallback(() => {
  //     setDummy(dummy + 1);
  //   }, [dummy]);

  let changedummy = useCallback(() => {
    setDummy(dummy + 1);
  }, [dummy]);

  let trackref = () => {
    setState1(myref.current.value);
  };

  return (
    <div>
      <input
        onChange={trackref}
        type="number
      "
        ref={myref}
      />
      <h1>
        {state1} <button onClick={change1}>change 1 par</button>
      </h1>
      <h1>
        {state2} <button onClick={change2}>change 2 par</button>
      </h1>
      <Call2 dummy={dummy} chdummy={changedummy} />
      {/* <button onClick={() => setDummy("dummy changed")}>change dumm</button> */}
    </div>
  );
}

export default Callback;
