import React from "react";
import { Employees } from "./employees";
import '../styles/Menu.css'


import axios from "axios";// axios is a Promise based HTTP client

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class ShowEmployee extends React.Component {

    //needs to bind the reloaddata into the constructor
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    //when my componentes become visible what I want to do
    componentDidMount() {
        //axios make a http request and get back a response
        axios.get('http://localhost:4000/api/employees')
            //call back function
            .then((response) => {
                console.log(response.data);
                this.setState({
                   
                    employees: response.data
                    
                })

            })
            //in case thinks goes wrong
            .catch(function (error) {
                console.log(error);
            });
    }
    // exaclty the same functionality as componetDidMount
    //it will be called to redraw the components after the delete button is clicked
    //and the employee is deleted from the database
    ReloadData() {
        //axios make a http request and get back a response
        axios.get('http://localhost:4000/api/employees')
            //call back function
            .then((response) => {
                this.setState({
                    employees: response.data
                })

            })
            //in case thinks goes wrong
            .catch(function (error) {
                console.log(error);
            });
    }

    /* This state can be modified based on user action or other action. when a component
    state is changed React will re-render the component to the browser. Pass this read
    components state to the new employee component */
    //create a state object and associate with array
    state = {
        employees: [

        ]
    }

    //employee will be embeded
    render() {
        return (
            <div className="menu">
                <h1 className="menuTitle">Our Employees</h1>
                <div className="menuList">
                    {/* in render this is sending it to employees (got to employeess and loadit there From parent to child) */}
                    <Employees employees={this.state.employees} ReloadData={this.ReloadData}></Employees>

                </div>
            </div>
        );
    }

}