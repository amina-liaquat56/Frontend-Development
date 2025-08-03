import React from 'react';
class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flag: true };
    }
    toggleFlag = () => {
        this.setState({ flag: !this.state.flag });
    }
    render() {
        return (
            <div>
                {this.state.flag ? <div>Hellllllo</div> : null}
                <button onClick={this.toggleFlag}>
                    {this.state.flag ? 'HIDE' : 'SHOW'}
                </button>
            </div>
        );
    }
}
export default MyClass;
--------------------------------------
import React, { useState } from 'react';
export default function Demo() {
    const [flag, toggleFlag] = useState(true);
    const toggle = function () {
        toggleFlag(!flag)
    }
    return (
        <div>
            {flag ? <div>Hellllllo</div> : null}
            <button onClick={toggle}>
                {flag ? 'HIDE' : 'SHOW'}
            </button>
        </div>
    )
}
