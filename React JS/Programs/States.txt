class Counter extends React.Component {
   constructor(props) {
     super(props);
     this.state = {count: 0 };
  }
  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.increment}>click!</button>
      </div>
    );
  }
};
