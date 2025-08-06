problem with Local Variables declared inside render()
*********************************************************
import React, { Component } from 'react'
export default class Test extends Component {
    render() {
        let count = 0;
        function increment() {
            count = count + 1;
            alert(count);
        };
        return (
            <div>
                <p>The count is: {count}</p>
                <button onClick={() => increment()}>Add one</button>
            </div>
        );
    }
}
// render() method gets invoked only if there is a change in props/state
