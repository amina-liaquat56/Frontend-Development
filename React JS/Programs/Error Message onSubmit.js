import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            nameErrorMsg: '',
            ageErrorMsg: '',
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    mySubmitHandler = (event) => {
        event.preventDefault();

        let err1 = '';
        let err2 = '';

        if (this.state.username.length < 5) {
            err1 = <strong>Your name mustcontain 5 chars</strong>;
        }
        if (this.state.age !== "" && !Number(this.state.age)) {
            err2 = <strong>Your age must be a number</strong>;
        }
        this.setState({ nameErrorMsg: err1, ageErrorMsg: err2 });
        //alert("You are submitting " + this.state.username + " " + this.state.age);
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                {this.state.nameErrorMsg}

                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.ageErrorMsg}

                <input type="submit" />
            </form>
        );
    }
}
export default MyForm;
