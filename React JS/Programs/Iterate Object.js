import React, { Component } from 'react'

export default class Demo1 extends Component {
    render() {
        let employees = [
            { eId: 101, name: "ayehsa", sal: 5000 },
            { eId: 104, name: "amina", sal: 8000 },
            { eId: 103, name: "fatima", sal: 7000 },
            { eId: 102, name: "mahnoor", sal: 9000 }
        ]
        return <div className="container">
            <h2 className='text-center'>Employees Table</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp, ind) => (
                            <tr key={ind}>
                                {Object.values(emp).map((val, ind) => (
                                    <td key={ind}>{val}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    }
}
