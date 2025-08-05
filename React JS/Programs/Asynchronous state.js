import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCountFiveTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }
  render() {
    return (
      <h2>
        counter works
        <div>Count - {this.state.count}</div>
        <button className="btn btn-primary m-2" onClick={this.increment}>
          Increment
        </button>
        <button className="btn btn-primary m-2" onClick={this.incrementCountFiveTimes}>
          Increment
        </button>
      </h2>
    );
  }
}
