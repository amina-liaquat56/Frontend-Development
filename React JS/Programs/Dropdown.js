class MyForm extends React.Component {
  import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mycar: 'Volvo'
        };
    }
    changeHandler = (event) => {
        this.setState({ mycar: event.target.value })
    }
    render() {
        return (
            <form>
                <select value={this.state.mycar} onChange={this.changeHandler}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Maruti">Maruti</option>
                    <option value="Tata">Tata</option>
                </select>
                <div>Selected Car: {this.state.mycar}</div>
            </form>
        );
    }
}

}
