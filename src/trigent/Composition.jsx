import React, { useState } from "react";

function Composition() {
  let [name, setName] = useState("Murugan");
  console.log(<Child1 />);
  return (
    <Child1>
      <Child2 />
      <Child3 name={name} />
    </Child1>
  );
}

let Child1 = ({ children }) => {
  return (
    <>
      <p>from child 1</p>
      {children}
    </>
  );
};

let Child2 = () => <p>from child 2</p>;

    
let Child3 = ({ name }) => {
  return (
    <>
      <p>from child 3</p>
      <h1>{name}</h1>
    </>
  );
};

export default Composition;
