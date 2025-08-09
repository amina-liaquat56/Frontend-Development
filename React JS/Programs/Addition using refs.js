import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
    }
    add = () => {
        let value_1 = parseInt(this.myRef1.current.value);
        let value_2 = parseInt(this.myRef2.current.value);
        alert(value_1 + value_2);
    }
    render() {
        return (
            <>
                <input name="textbox1" ref={this.myRef1} type="text" />
                <input name="textbox2" ref={this.myRef2} type="text" />
                <button onClick={this.add}>Add</button>
            </>
        )
    }

}
--------------------------------------------------
import React, { useRef } from "react";
export default function Addition() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  
  const add = () => {
    const val1 = +inputRef1.current.value;
    const val2 = +inputRef2.current.value;
    alert(val1 + val2);
  };

  return (
    <div>
      num1: <input ref={inputRef1} />
      num2: <input ref={inputRef2} />
      <button onClick={add}>Add</button>
    </div>
  );
}
