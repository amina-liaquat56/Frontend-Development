import React, { Component } from 'react'
export default class Conditional extends Component {
    count = 0;
    increment = () => {
        this.count = this.count + 1;
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <p>The count is: {this.count}</p>
                <button onClick={this.increment}>Add one</button>
            </div>
        );
    }
}
