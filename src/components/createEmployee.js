// create.js
import React from 'react';
import axios from 'axios';
import '../styles/CreateEmp.css'

import leftImage from '../assets/happyEmp.jpg'
import { Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";


//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 


export class CreateEmployee extends React.Component {

    //you should bind the events otherwise won't work
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeEmpPic = this.onChangeEmpPic.bind(this);
        this.onChangeEmpAddress = this.onChangeEmpAddress.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangePps = this.onChangePps.bind(this);


        /*
               state object contains a single property that is an array of books with 3 entries
           */
        this.state = {
            name: '',
            empPic: '',
            address: '',
            salary: '',
            pps: ''

        }
    }

    //will take an event wheni t get envoked
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked,
                    ${this.state.name},  
                    ${this.state.empPic}, 
                    ${this.state.address}, 
                    ${this.state.salary}, 
                    ${this.state.pps}`);

        //create an object
        const employee = {
            name: this.state.name,
            empPic: this.state.empPic,
            address: this.state.address,
            salary: this.state.salary,
            pps: this.state.pps

        }

        //use axios to generata a http request and we passe up book
        //this has to be employeesssssss plural
        axios.post('http://localhost:4000/api/employees', employee)
            .then((res) => {
                window.location = "/showEmployees"
            })
            .catch();


        this.setState({
            name: '',
            empPic: '',
            address: '',
            salary: '',
            pps: ''

        })

    }

    //method to update the state
    onChangeEmpName(e) {
        this.setState({
            name: e.target.value
        })
    }

    //method to update the state
    onChangeEmpPic(e) {
        this.setState({
            empPic: e.target.value
        })
    }

    //method to update the state
    onChangeEmpAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangeSalary(e) {
        this.setState({
            salary: e.target.value
        })
    }

    onChangePps(e) {
        this.setState({
            pps: e.target.value
        })
    }


    render() {
        return (

            <div className='contact'>
                <div
                    className='leftSide'
                    style={{ backgroundImage: `url(${leftImage})` }}
                  
                ></div>
                <div className='rightSide'>
                    <h1> Create an Employee </h1>

                    <form onSubmit={this.handleSubmit}>
                        <label>Full Name</label>
                        <input name="name"
                            placeholder='Enter full name...'
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeEmpName}
                        ></input>

                        <label>Employee Photo</label>
                        <input
                            placeholder='Paste the link for the photo...'
                            type="text"
                            value={this.state.empPic}
                            onChange={this.onChangeEmpPic}
                        ></input>

                        <label>Address</label>
                        <input
                            placeholder='Please enter employee address...'
                            type="text"
                            value={this.state.address}
                            onChange={this.onChangeEmpAddress}
                        ></input>

                        <label>Salary</label>
                        <input
                            placeholder='Enter employee salary...'
                            type="text"
                            value={this.state.salary}
                            onChange={this.onChangeSalary}
                        ></input>

                        <label>PPS</label>
                        <input
                            placeholder='Enter employee PPS number...'
                            type="text"
                            value={this.state.pps}
                            onChange={this.onChangePps}
                        ></input>


                        <button type='submit'>Add Employee</button>
                    </form>
                </div>
            </div>



        );
    }
}