import React, { useState } from "react";

let Call2 = React.memo(({ dummy, chdummy }) => {
  let [state, setState] = useState("from child");
  return (
    <div>
      {console.log("im from child comp")}
      <h1>{dummy}</h1>
      <button onClick={chdummy}>change dummy</button>
    </div>
  );
});

export default Call2;
