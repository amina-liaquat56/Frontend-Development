import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let { pId, name, price } = this.props.prodObj;
        return (
            <div style={{ border: '2px solid red' }}>
                {pId} <br />
                {name} <br />
                {price} <br />
                <button class='btn btn-success'>Buy Now</button>
                <h2>the text from my parent comp is {this.props.children}</h2>
            </div>
        )
    }
}
