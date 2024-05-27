import React, { useEffect, useRef, useState } from "react";

function Usereference() {
  let ref = useRef(0);
  let focusRef = useRef(null);
  let [state, setState] = useState("");

  useEffect(() => {
    console.log(focusRef);
    console.log(focusRef.current);
    // focusRef.current.focus();
  }, []);

  function handleClick() {
    ref.current++;
    console.log(ref.current);
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    focusRef.current.style.backgroundColor = `rgb(${r},${g}, ${b})`;
    setState(`rgb(${r},${g}, ${b})`);
    let button = document.querySelector("button");
    button.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  }

  return (
    <>
      {console.log("rerendering")}
      <input ref={focusRef} type="text" />
      <button onClick={handleClick}>clickme</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        corporis quia sequi quasi, esse beatae iusto facere! Dolore dicta
        repudiandae id iure vel nihil animi, odit est culpa sint expedita.
        Perferendis itaque sunt reprehenderit architecto quaerat ut veniam ipsa
        iure adipisci. Corrupti tenetur dicta repudiandae ad deserunt
        perferendis qui nemo a exercitationem sint! Quod, architecto ea ab
        eveniet natus libero?
      </p>
    </>
  );
}

export default Usereference;
