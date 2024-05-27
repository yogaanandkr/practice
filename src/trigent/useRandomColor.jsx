import { useState } from "react";

function useRandomColor() {
  let [color, setColor] = useState();

  let genColor = () => {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
  };

  return [color, genColor];
}

export default useRandomColor;
