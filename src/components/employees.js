import React from "react";
import { EmployeeRecord } from "./EmployeeRecord";


/**
 * Employees component contains the books to be displayed in the Read component. Each Item
 * on the list is represented by the BookItem component. 
 */

export class Employees extends React.Component{
    render(){

        return this.props.employees.map(
            (employee)=>{
                // this is the child so pass reload data here to be accessed in employee records .then()
                return <EmployeeRecord employee={employee} key={employee._id} ReloadData={this.props.ReloadData}></EmployeeRecord>//in mongodb book._id to gather data data indetified by _id
            }

        );
    }
}