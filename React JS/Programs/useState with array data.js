import React, { useState } from 'react'

export default function Test() {
    const [employees, setEmployees] = useState([
        { id: 101, name: 'sanjay', sal: 5000 },
        { id: 102, name: 'yash', sal: 7000 },
        { id: 103, name: 'suresh', sal: 6000 },
    ]);

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [sal, setSal] = useState();

    function setDefaultValues() {
        setId('');
        setName('');
        setSal('')
    }
    const deleteEmp = (ind) => {
        employees.splice(ind, 1)
        setEmployees([...employees])
    }
    const addEmployee = (event) => {
        event.preventDefault();
        let newObj = { "id": id, "name": name, "sal": sal };
        setEmployees([...employees, newObj])
        setDefaultValues();
    }

    return (
        <>
            <table className='table table-bordered table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>eid</th>
                        <th>name</th>
                        <th>sal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, ind) => {
                        return (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.sal}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteEmp(ind)}>DELETE</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <hr />
            <form onSubmit={addEmployee}>
                id : <input
                    name="id"
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                /> <br /><br />

                Name : <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                /> <br /><br />


                Name : <input
                    name="sal"
                    type="text"
                    value={sal}
                    onChange={e => setSal(e.target.value)}
                /> <br /><br />

                <input type='submit' />
            </form>

        </>
    );
}
