import React, { useState } from "react";
import Payment from "./Payment";
import Login from "./login";

function Mail() {
  let [bool, setBool] = useState();

  function changeText() {
    let dangerText = "I'm not in danger, I'm the danger";
    return dangerText;
  }

  return (
    <>
      <h1>hello</h1>
      <button
        dangerouslySetInnerHTML={{ __html: changeText }}
        onClick={e => {
          changeText;
          e.target.style.backgroundColor = "red";
        }}
      >
        click me
      </button>

      {bool ? <Payment /> : <Login bool={bool} setBool={setBool} />}
    </>
  );
}

export default Mail;
