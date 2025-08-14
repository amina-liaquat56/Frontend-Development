import React, { Component } from 'react';
export default class MyErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong, Component cann't be loaded </h2>
        } else {
            // Normally, just render children
            return this.props.children;
        }
    }
}


import React, { Component } from 'react'
export class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <>
            <h1>Count is : {this.state.counter}</h1>
            <button onClick={this.increment}>Increment</button>
        </>
    }
}


function Test() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  );
}
