import React, { useMemo, useState } from "react";

function Memo() {
  let [state, setState] = useState(0);
  let [dum, setDum] = useState(0);

  let fun = useMemo(() => {
    console.log("in func");
    return dum * 2;
  }, [dum]);
  return (
    <div>
      <h1>{state}</h1>
      <h2>{fun}</h2>
      <button onClick={() => setState(state + 1)}>set state</button>
      <button onClick={() => setDum(dum + 1)}>set dum</button>
    </div>
  );
}

export default Memo;
