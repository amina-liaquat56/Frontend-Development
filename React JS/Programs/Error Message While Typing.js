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
        let err1= '';
        let err2 = '';
        if (nam === "username") {
            if (val.length < 5) {
                err1 = <strong>Your name must contain 5 chars</strong>;
            }
        }
        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                err2 = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({ nameErrorMsg: err1 });
        this.setState({ ageErrorMsg: err2 });
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
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
            </form>
        );
    }
}

export default MyForm;
