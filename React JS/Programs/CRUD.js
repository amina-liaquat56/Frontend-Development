import React, { useState } from 'react'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee';

export default function EmployeeCrud() {
    const initialEmployees = [
        { eId: 101, name: "fatima", sal: 5000 },
        { eId: 104, name: "amina", sal: 8000 },
        { eId: 103, name: "ayesha", sal: 7000 },
        { eId: 102, name: "mahnoor", sal: 9000 },
    ];
    const [employees, setEmployees] = useState(initialEmployees);
    const [isEdit, setIsEdit] = useState(false);
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [selectedEmployee, setSelectedEmployee] = useState(initialEmp);

    const deleteEmployee = (idToDelete) => {
        let filteredEmployees = employees.filter(emp => emp.eId !== idToDelete);
        setEmployees([...filteredEmployees])
    }
    const addEmployee = (emp) => {
        employees.push(emp);
        setEmployees([...employees]);
    }
    const editEmployee = (emp) => {
        setSelectedEmployee(emp);
        setIsEdit(true);
    }
    const saveEditedEmployee = (editedEmp) => {
        let updatedEmployees = employees.map(emp => {
            if (emp.eId === editedEmp.eId) {
                return editedEmp;
            } else {
                return emp;
            }
        })
        setEmployees([...updatedEmployees]);
        setIsEdit(false);
    }
    const cancelSave = () => {
        setSelectedEmployee(initialEmp);
        setIsEdit(false);
    }

    return <>
        <h2 className='text-center'>This is EmployeeCRUD Component</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <h3>Employee List</h3>
                    <EmployeeList
                        employees={employees}
                        deleteEmployee={deleteEmployee}
                        editEmployee={editEmployee}
                    />
                </div>
                <div className='col-sm-4'>
                    {
                        isEdit ?
                            <EditEmployee
                                selectedEmployee={selectedEmployee}
                                saveEditedEmployee={saveEditedEmployee} 
                                cancelSave={cancelSave}
                                />
                            :
                            <AddEmployee addEmployee={addEmployee} />
                    }
                </div>
            </div>
        </div>
    </>
}

------------------------------------------------
import React from 'react'
import { useState } from 'react';

export default function EditEmployee({ selectedEmployee, saveEditedEmployee, cancelSave }) {
    const [emp, setEmp] = useState(selectedEmployee);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }
    return <>
        <h3>Edit Employee</h3>
        <p>eId : <input value={emp.eId} name='eId' onChange={(e) => changeHandler(e)} /></p>
        <p>Name : <input value={emp.name} name='name' onChange={(e) => changeHandler(e)} /></p>
        <p>Salary : <input value={emp.sal} name='sal' onChange={(e) => changeHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={cancelSave} className='btn btn-secondary mx-1'>Cancel</button>
            <button onClick={() => saveEditedEmployee(emp)} className='btn btn-primary'>Save</button>
        </div>
    </>
}

------------------------------------------------
import React, { useState } from 'react'

export default function AddEmployee({ addEmployee }) {
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [emp, setEmp] = useState(initialEmp);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }
    const addMyEmployee = (emp) => {
        addEmployee(emp);
        setEmp(initialEmp);
    }
    return <>
        <p>eId : <input value={emp.eId} name='eId' onChange={(e) => changeHandler(e)} /></p>
        <p>Name : <input value={emp.name} name='name' onChange={(e) => changeHandler(e)} /></p>
        <p>Salary : <input value={emp.sal} name='sal' onChange={(e) => changeHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={() => addMyEmployee(emp)} className='btn btn-primary'>Add Employee</button>
        </div>
    </>
}
