import React, { Component } from 'react'
import Product from './product'
export default class Productlist extends Component {
    productList = [
		{ pId: 101, name: "iphone", price: 5000 },
		{ pId: 102, name: "samsung", price: 4000 },
		{ pId: 103, name: "oppo", price: 3000 },
	];
    render() {
        return (
            <div>
                <h1>This is Product-List Component</h1>
                {this.productList.map(item => (
                    <Product product={item} />
                ))}
            </div>
        )
    }
}
--------------------------------------
import React, { Component } from 'react';
import './product.css';
export default class Product extends Component {
    render() {
        return (
            <div class='product'>
                {this.props.product.id} <br />
                {this.props.product.name} <br />
                {this.props.product.price} <br />
                <button class='btn btn-success'>Buy Now</button>
            </div>
        )
    }
}

