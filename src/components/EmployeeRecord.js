import React from "react";
import { Card } from "react-bootstrap";//use Card from react bootstrap that will do all the hard work to us
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";//add buuton from bootstrap
import axios from "axios";

export class EmployeeRecord extends React.Component {
    //the function needs to be bided on the constructor
    constructor(){
        super();
        this.DeleteEmployee = this.DeleteEmployee.bind(this);
    }

    // function to delete - this is an event that is going to send a request to my server
    DeleteEmployee(e){
        e.preventDefault();
        console.log("delete button clicked");
        
        //dont't forget to add the back slash at the end of the url  and _ before id and its not books its book/
        axios.delete('http://localhost:4000/api/employee/' + this.props.employee._id)
        .then((res)=>{
            //this function will refresh the page after delete is clicked
            this.props.ReloadData(); //call from grand parent read.js than to the parent book
        })
        .catch();


    }

    render() {
        return (

            /**
             * The BookItems component displays information about a single book
             * The information to displayed is passed down from the Read component via the 
             * Books component to individual BookItem components. 
             * 
             */
            <Card>
                <Card.Header>{this.props.employee.name}</Card.Header>
                <Card.Body>
                    <blockquote>
                        <img src={this.props.employee.empPic} width="200" height="200"></img>
                        <footer>
                            {this.props.employee.salary}
                            {this.props.employee.address}
                            {this.props.employee.pps}
                        </footer>
                    </blockquote>
                </Card.Body>

                {/* Link will load the id of the book into the url whan edit is clicked */}
                <Link to={'/edit/' + this.props.employee._id} className="btn btn-primary">Edit</Link>
                <Button variant='danger' onClick={this.DeleteEmployee}>Delete</Button>
            </Card>

        );
    }


}