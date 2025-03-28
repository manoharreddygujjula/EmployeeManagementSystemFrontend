import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { Navigate, useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {


    const dummyData =[
        {
            "id":1,
            "firstName":"Manohar Reddy",
            "lastName":"Gujjula",
            "email":"manohar@gmail.com"
        },
        {
            "id":2,
            "firstName":"Satya Narayana Reddy",
            "lastName":"Gujjula",
            "email":"satya@gmail.com"
        }
    ];

    const [employees,setEmployees]= useState([]);
    const navigater=useNavigate();

    useEffect(()=>{
        getAllEmployees()
    },[])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    function addEmployee(){
        navigater('/add-employee');
    }

    function updateEmployee(id){
        navigater(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        deleteEmployee(id).then((response)=>{
            getAllEmployees()
        }).catch(error=>console.log(error));
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List Of Employees</h2>
      <button type="button" className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered border rounded-3'>
        <thead>
            <tr>
                <th>Employee id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-info " onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger" onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent


