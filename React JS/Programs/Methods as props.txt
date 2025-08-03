import React, { Component } from 'react';
import Child from '../child/child';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parentttt'
        };
        this.greetParent = this.greetParent.bind(this);
        this.greetParentWithParam = this.greetParentWithParam.bind(this);
    }
    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }
    greetParentWithParam(data) {
        alert(`Hello parent with parameter from ${data}`)
    }
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent} greetHandler2={this.greetParentWithParam}/>
            </div>
        )
    }
}
-----------------------
import React from 'react';
class Child extends React.Component {
    render() {
        return (
            <div>
                <div>I am child component</div>
                <button onClick={this.props.greetHandler}>Invoke parent Method</button>
                <button onClick={() => this.props.greetHandler2('childparameter')}>Invoke parent Method</button>
            </div>
        );
    }}
export default Child;
