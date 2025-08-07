import React, { useState } from "react";
import Demo2 from "../demo2/Demo2";

export default function Demo() {
  const [counter, setCounter] = useState(0);
  const [cars, setCars] = useState(["tata", "honda", "maruti"]);
  return (
    
function Demo2(props) {
  console.log("demo-2 render called");
  return (
    <div>
      Demo2
      {props.cars.map((car) => {
        return <li>{car}</li>;
      })}
    </div>
  );
}
export default React.memo(Demo2);
