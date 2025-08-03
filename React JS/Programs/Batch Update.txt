import React, { useState } from "react";

export default function Demo1() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
    // setCount(count + 1);
  };
  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment5}>Increment By 5</button>
    </div>
  );
}
