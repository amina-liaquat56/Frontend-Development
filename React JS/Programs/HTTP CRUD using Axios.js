import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";
import "./Curd.css";

export default class Curd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      isEdit: false,
      users: [],
      id: "",
      name: "",
      email: "",
      address: "",
      phone: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    let output = {};
    output = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };
    if (this.state.isEdit) {
      this.updateEmployees(output, this.state.id);
    } else {
      this.addEmployee(output);
    }
  };
  fetchEmployees = () => {
    const myURL = "http://localhost:4000/users";
    axios.get(myURL).then((result) => {
      this.setState({ users: result.data });
    });
  };

  addEmployee(data) {
    const myURL = "http://localhost:4000/users";
    axios.post(myURL, data).then((response) => {
      Swal.fire("Employee got added", "", "success");
      this.closeModal();
      this.fetchEmployees();
    });
  }

  updateEmployees = (data, empId) => {
    axios
      .put(`http://localhost:4000/users/${empId}`, data)
      .then((response) => {
        Swal.fire("Employee got updated", "", "success");
        this.closeModal();
        this.fetchEmployees();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  deleteEmployee = (empId) => {
    axios.delete(`http://localhost:4000/users/${empId}`).then((result) => {
      this.fetchEmployees();
    });
  };
  componentDidMount() {
    this.fetchEmployees();
  }
  openModal = () => {
    this.setState({ modalIsOpen: true, isEdit: false });
  };
  openEditModal = (id, name, email, address, phone) => {
    this.setState({
      id: id,
      name: name,
      email: email,
      address: address,
      phone: phone,
      isEdit: true,
      modalIsOpen: true,
    });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    let nameValue;
    if (this.state.isEdit) {
      nameValue = this.state.name;
    }
    let emailValue;
    if (this.state.isEdit) {
      emailValue = this.state.email;
    }
    let addressValue;
    if (this.state.isEdit) {
      addressValue = this.state.address;
    }
    let phoneVlue;
    if (this.state.isEdit) {
      phoneVlue = this.state.phone;
    }
    return (
      <div>
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2 style={{textAlign : 'left'}}>
                      Manage <b>Employees</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      className="btn btn-success"
                      onClick={this.openModal}
                      data-toggle="modal"
                    >
                      <GrAddCircle/>
                      <span>Add New Employee</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user, ind) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        <td>
                          <a
                            className="edit"
                            onClick={() =>
                              this.openEditModal(
                                user.id,
                                user.name,
                                user.email,
                                user.address,
                                user.phone
                              )
                            }
                          >
                            <AiFillEdit />
                          </a>
                          <a
                            className="delete"
                            href="/"
                            onClick={() => this.deleteEmployee(user.id)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <form onSubmit={this.mySubmitHandler}>
            <div className="modal-header">
              <h4 className="modal-title">Add Employee</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.myChangeHandler}
                  className="form-control"
                  value={nameValue}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.myChangeHandler}
                  className="form-control"
                  value={emailValue}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  onChange={this.myChangeHandler}
                  className="form-control"
                  value={phoneVlue}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  onChange={this.myChangeHandler}
                  className="form-control"
                  value={addressValue}
                  required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                onClick={this.closeModal}
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" className="btn btn-info" value="Save" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
