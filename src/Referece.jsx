import React, { useMemo, useRef, useState } from "react";

function Referece() {
  let myRef = useRef("");
  let [color, setColor] = useState("black");
  let [opacity, setOpacity] = useState(1);

  let handleClick = () => {
    let color = myRef.current.value;
    // console.log(color);
    document.querySelector("div").style.backgroundColor = color;
    document.querySelector("div").style.opacity = opacity;
    console.log(opacity);
    setColor(color);
  };
  let memFun = useMemo(() => {
    mem();
    handleClick();
  }, [opacity]);

  function mem() {
    console.log("im memory");
  }

  return (
    <div>
      <input onInput={handleClick} type="text" ref={myRef} />
      <button onClick={() => setOpacity(opacity - 0.1)}>click</button>
    </div>
  );
}

export default Referece;
