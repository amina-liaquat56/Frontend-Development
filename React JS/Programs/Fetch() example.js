import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    fetchUsers = () => {
        const myURL = 'https://jsonplaceholder.typicode.com/users';

        fetch(myURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ 'users': data })
            });
    }
    componentDidMount() {
        this.fetchUsers();
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
-----------------------------------------------------
import React, { useEffect, useState } from "react";
export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
      });
  });
  return (
    <>
      <h1>Comment List</h1>

      <table className="table table-bordered">
        {comments.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
