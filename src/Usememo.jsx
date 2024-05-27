import React, { useMemo, useState } from "react";

function Usememo() {
  let [num, setNum] = useState(0);
  let [dummy, setDummy] = useState(1);
  let [toggle, setToggle] = useState(true);
  let oriObj = {
    name: "anand",
    age: 22,
  };
  let result = useMemo(() => {
    return modObj();
  }, [num]);

  function modObj() {
    console.log("in modobj");
    oriObj = {
      name: "anand",
      age: 22,
    };
    return oriObj;
  }
  return (
    <div>
      <h1>{num}</h1>
      <input type="text" onChange={e => setNum(e.target.value)} />
      <h2>result: {result.name}</h2>
      <button onClick={modObj}>click</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default Usememo;
