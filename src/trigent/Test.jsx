import React, { useMemo, useCallback, useState } from "react";

function Test() {
  let condition = name => {
    return typeof name === String ? name : new Error("its not a string");
  };
  return (
    <div>
      <Child name={condition("hello")} />
    </div>
  );
}

function Child({ name }) {
  return (
    <>
      <div>{name}</div>
    </>
  );
}

export default Test;
