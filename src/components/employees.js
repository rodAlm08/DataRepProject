import React from "react";
import { EmployeeRecord } from "./EmployeeRecord";
/**
 * Employees component contains the employees to be displayed in the Read component. Each Item
 * on the list is represented by the Employee Record component. 
 */
export class Employees extends React.Component{
    render(){
        return this.props.employees.map(
            (employee)=>{
                console.log(employee)
                // this is the child so pass reload data here to be accessed in employee records .then()
                return <EmployeeRecord employee={employee} key={employee._id} ReloadData={this.props.ReloadData}></EmployeeRecord>//in mongodb employee._id to gather data data indetified by _id
            }
        );
    }
}