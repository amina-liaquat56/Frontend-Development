import React from 'react';

class Crud extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [
                { eId: 101, name: "sanjay", sal: 5000 },
                { eId: 104, name: "deepak", sal: 8000 },
                { eId: 103, name: "ranjan", sal: 7000 },
                { eId: 102, name: "manoj", sal: 9000 }
            ],
            newEmp: { eId: '', name: '', sal: 0 }
        }
    }
    deleteRow = (ind) => {
        this.state.employees.splice(ind, 1);
        this.setState({ employees: this.state.employees })
    }
    viewRow = (emp) => {
        alert(`${emp.eId} ${emp.name}  ${emp.sal}`)
    }
    updateId = (e) => {
        //this.state.newEmp.eId = e.target.value;
        this.setState({ newEmp: this.state.newEmp.id = e.target.value })
        this.setState({ newEmp: this.state.newEmp })
    }
    updateName = (e) => {
        this.state.newEmp.name = e.target.value;
        this.setState({ newEmp: this.state.newEmp })
    }
    updateSal = (e) => {
        this.state.newEmp.sal = e.target.value;
        this.setState({ newEmp: this.state.newEmp })
    }
    addRow = () => {
        this.state.employees.push(this.state.newEmp);
        this.setState({ employees: this.state.employees })
        //this.setState({ newEmp: { eId: '', name: '', sal: 0 } })
    }

    render() {
        return (
            <div>
                <table border='1' align='center' width='50%'>
                    <tr>
                        <th>Sl No.</th>
                        <th>Emp Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    {this.state.employees.map((emp, ind) => (
                        <tr key={emp.eId}>
                            <td>{ind}</td>
                            <td>{emp.eId}</td>
                            <td>{emp.name}</td>
                            <td>{emp.sal}</td>
                            <td>
                                <button onClick={() => this.deleteRow(ind)}>Delete</button>
                                <button onClick={() => this.viewRow(emp)}>View</button>
                            </td>
                        </tr>
                    ))}
                </table>

                Emp Id:
                    <input onKeyUp={this.updateId}></input> <br></br><br></br>
                Name:
                    <input onKeyUp={this.updateName}></input> <br></br><br></br>
                Salary:
                    <input onKeyUp={this.updateSal}></input> <br></br><br></br>

                <button onClick={this.addRow}>Add a new employee</button>

            </div>
        );
    }
}
export default Crud;
