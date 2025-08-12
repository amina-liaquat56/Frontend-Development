import React, { Component } from 'react';
import axios from 'axios';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    async fetchUsers() {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({ users: response.data })
        }
        catch (error) {
            console.log(error)
        }
    }
    componentDidMount() {
        this.fetchUsers()
    }
    render() {
        return (
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, ind) => {
                        return (<tr key={ind}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}
