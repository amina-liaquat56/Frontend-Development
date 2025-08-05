import React, { Component } from 'react';
export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
        }
    }
    togglePassword = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {

        return (
            <div>
                <input type={this.state.flag ? 'password' : 'text'} />
                <button onClick={this.togglePassword}>{this.state.flag ? 'Show password' : 'Hide password'}</button>
            </div>
        )
    }
}
------------------------------------------------
import React, { useState } from "react";

export default function Demo() {
  const [flag, toggleFlag] = useState(true);
  const toggle = function () {
    toggleFlag(!flag);
  };
  return (
    <div>
      <input type={flag ? "password" : "text"} />
      <button onClick={toggle}>
        {flag ? "Show password" : "Hide password"}
      </button>
    </div>
  );
}
