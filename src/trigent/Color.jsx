import React from "react";
import useRandomColor from "./useRandomColor";

function Color() {
  let [color, genColor] = useRandomColor();
  let changeColor = () => {
    document.body.style.backgroundColor = genColor();
  };
  return (
    <div>
      <button onClick={changeColor}>Click me</button>
    </div>
  );
}

export default Color;
