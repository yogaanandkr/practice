import React, { useEffect, useRef, useState } from "react";

const Useref = () => {
  let [state, setState] = useState("Vetrivel muruganukku haroogara");
  let inputRef = useRef(null);
  let h1Ref = useRef(null);
  const showText = () => {
    console.log(inputRef.current.value)
    setState(inputRef.current.value)
    inputRef.current.focus()
  }

  useEffect(() => {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }, [state]);
  return (
    <>
      <h1 ref={h1Ref}>{state}</h1>
      <input type="text" ref={inputRef} />
      <button onClick={showText}>{state}</button>
    </>
  );
};

export default Useref;
