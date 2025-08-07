import React, { Component } from 'react'
import { PureComponent } from 'react';
export default class Demo1 extends PureComponent {
    state = {
        name: 'sachin'
    }
    render() {
        console.log('Demo1 render called....');
        setInterval(() => {
            this.setState({name:'sachin1'})
        }, 5000)
        return (
            <div>
                This is Demo1 Component {this.state.name}
            </div>
        )
    }
}
