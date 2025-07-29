import React from 'react';
export default function Demo1() {
    let num = 5;
    let style1 = { color: 'blue' }
    let style2 = { color: 'red' }
    return (
        <>
		  <div style={num % 2 === 0 ? { color: "green" } : { color: "red" }}>
			Number {num} is {num % 2 === 0 ? "even" : "odd"}
		  </div>
		  <div style={num % 2 === 0 ? style1 : style2}>
			Number {num} is {num % 2 === 0 ? "even" : "odd"}
		  </div>
		  <button className={`btn btn-lg ${num % 2 === 0 ? "btn-success" : "btn-danger"}`}>
			add a class dynamically
		  </button>
		</>
    )
}
