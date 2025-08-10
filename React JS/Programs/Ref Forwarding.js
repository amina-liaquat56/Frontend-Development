import React, { Component } from 'react'
import FancyButton from '../FancyButton/FancyButton'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    fun1 = () => {
        console.log(this.myRef.current.className)
        console.log(this.myRef.current.id)
    }
    render() {
        return (
            <div>
                <FancyButton ref={this.myRef} >
                    <div>button text</div>
                </FancyButton>

                <button onClick={this.fun1}>click me</button>
            </div>
        )
    }
}
-------------------------------------
import React from 'react';
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" id='btn1'>
        {props.children}
    </button>
));
export default FancyButton;
