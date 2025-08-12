import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const fetchUsers = async function() {
    let response = await axios.get("http://localhost:4000/users");
    setUsers(response.data);
  };
  const addUser = async function() {
    const newUser = {
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
    }
    let response = await axios.post("http://localhost:4000/users", newUser);
    Swal.fire("Employee Added Successfully", "", "success");
    fetchUsers();
  };
  const deleteUser = (id) => {
    axios.delete(`http://localhost:4000/users/${id}`).then((res) => {
      Swal.fire("Employee Deleted Successfully", "", "success");
      fetchUsers();
    });
  };
  const editUser = (id) => {
   
  };
  const mySubmitHandler = function(event) {
    event.preventDefault();
    addUser();
  };
  return (
    <>
      <h1 className="text-center">CRUD Example</h1>
      <hr />
      <button onClick={fetchUsers}>get data</button>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <table className="table table-bordered table-striped table-responsive">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                          DELETE
                        </button> &nbsp;
                        <button className="btn btn-secondary" onClick={() => editUser(user.id)}>
                          EDIT
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className='text-center'>No data yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-sm-4">
            <form onSubmit={mySubmitHandler}>
              Name: <input name="name" value={name} onChange={e=>setName(e.target.value)} /> <br /><br />
              email: <input name="email" value={email} onChange={e=>setEmail(e.target.value)} /> <br /><br />
              phone: <input name="phone" value={phone} onChange={e=>setPhone(e.target.value)} /> <br /><br />
              address: <input name="address" value={address} onChange={e=>setAddress(e.target.value)} /><br />
              <br />
              <button className="btn btn-primary">Add Employee</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
