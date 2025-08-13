import React, { Component } from 'react';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.incrementCount()}>
                    Click me
            </button>
            </div>
        );
    }
}
---------------------------
import React, { useState } from 'react';
export default function Demo1() {
    // Declare a new state variable, which is "count"
    const [count, setCount] = useState(0); // initial value for count is '0'

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
