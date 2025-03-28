import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigater= useNavigate();
  const {id}=useParams();

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = {firstName,lastName,email}
    // console.log(employee)

    if(id){
        updateEmployee(id,employee).then((response)=>{
            console.log(response);
            navigater('/');
        }).catch(error=>console.log(error));
    }else{
        createEmployee(employee).then((response)=>{
            console.log(employee);
            navigater('/');
        })
    }
  }

  function pageTitle(){
    if(id){
        return <h1 className="text-center mb-4">Update Employee</h1>;
    }else{
        return <h1 className="text-center mb-4">Add Employee</h1>
    }
  }

  useEffect(()=>{
    if(id){
        getEmployee(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error=>{
            console.log(error);
        })
    }
  },[id])

  return (
    <div className="d-flex vh-100 justify-content-center align-items-start bg-light pt-5">
      <div className="bg-white p-4 rounded shadow w-50">
        {pageTitle()}
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={saveOrUpdateEmployee}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
