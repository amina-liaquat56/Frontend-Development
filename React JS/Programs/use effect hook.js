import React, { useEffect, useState } from "react";
export default function Demo() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("use effect called");
  }, [a,b]);
  return (
    <>
      <div>Demo</div>
      <div>
        {a} {b} {c}
      </div>
      <button onClick={() => setA(15)}>
        update A
      </button>
      <button onClick={() => setB(25)}>
        update B
      </button>
      <button onClick={() => setC(35)}>
        update C
      </button>     
    </>
  );
}
