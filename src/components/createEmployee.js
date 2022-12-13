// create.js
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 

 
export class CreateEmployee extends React.Component {
    
    //you should bind the events otherwise won't work
    constructor(){
        super();
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmpName=this.onChangeEmpName.bind(this);
        this.onChangeEmpPic=this.onChangeEmpPic.bind(this);
        this.onChangeEmpAddress=this.onChangeEmpAddress.bind(this);
        this.onChangeSalary=this.onChangeSalary.bind(this);
        this.onChangePps=this.onChangePps.bind(this);


 /*
        state object contains a single property that is an array of books with 3 entries
    */
        this.state = {
            name:'',
            empPic:'',
            address:'',
            salary:'',
            pps:''

        }
    }
    
    //will take an event wheni t get envoked
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked,
                    ${this.state.name},  
                    ${this.state.empPic}, 
                    ${this.state.address}, 
                    ${this.state.salary}, 
                    ${this.state.pps}`);
                    
        //create an object
        const employee= {
            name: this.state.name,
            empPic: this.state.empPic,
            address: this.state.address,
            salary: this.state.salary,
            pps: this.state.pps

        }

        //use axios to generata a http request and we passe up book
        //this has to be employeesssssss plural
        axios.post('http://localhost:4000/api/employees', employee)
        .then((res)=>{
           window.location = "/showEmployees"
        })
        .catch();


        this.setState({
            name:'',
            empPic:'',
            address:'',
            salary:'',
            pps:''

        })
       
    }
    
     //method to update the state
    onChangeEmpName(e){
        this.setState({
            name:e.target.value
        })
    }

    //method to update the state
    onChangeEmpPic(e){
        this.setState({
            empPic:e.target.value
        })
    }
    
    //method to update the state
    onChangeEmpAddress(e){
        this.setState({
            address:e.target.value
        })
    }

    onChangeSalary(e){
        this.setState({
            salary:e.target.value
        })
    }

    onChangePps(e){
        this.setState({
            pps:e.target.value
        })
    }


    render() {
        return (

            <div>
                {/* insert the form with handlers that are going to handle the actions and update the server */}
                    <form onSubmit={this.handleSubmit}>
                        {/*part of class form-group that will have a label and an input box
                        that will change the state.title after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Employee Name: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeEmpName}
                            />
                        </div>

                          {/*part of class form-group that will have a label and an input box
                        that will change the state.cover  after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Employee Photo: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.empPic}
                                onChange={this.onChangeEmpPic}
                            />
                        </div>

                        <div className="form-group">
                            <label>Add Employee Address: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeEmpAddress}
                            />
                        </div>

                          {/*part of class form-group that will have a label and an input box
                        that will change the state.author  after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Employee Salary: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.salary}
                                onChange={this.onChangeSalary}
                            />
                        </div>

                      

                        <div className="form-group">
                            <label>Add Employee PPS: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.pps}
                                onChange={this.onChangePps}
                            />
                        </div>

                    {/*submit button in the form that will take all the changes and update 
                    our state after submting it
                         */}
                    <input type="submit" value="Submit" />
                </form>

            </div>


        );
    }
}