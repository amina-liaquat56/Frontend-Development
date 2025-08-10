import React, { Component } from 'react'
export default class Test extends Component {
    add = () => {
        let val1 = parseInt(this.input1.value)
        let val2 = parseInt(this.input2.value)
        alert(val1 + val2)
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.input1 = input }} />
                <input type="text" ref={(input) => { this.input2 = input }} />
                <button type="button" onClick={this.add}>Add</button>
            </div>
        )
    }
}
----------------------------------------------------------------
export default function Addition() {
  let inputRef1;
  let inputRef2;

  const add = () => {
    const val1 = +inputRef1.value;
    const val2 = +inputRef2.value;
    alert(val1 + val2);
  };

  return (
    <div>
      num1: <input ref={input => { inputRef1 = input; }} />
      num2: <input ref={input => { inputRef2 = input; }} />
      <button onClick={add}>Add</button>
    </div>
  );
}
