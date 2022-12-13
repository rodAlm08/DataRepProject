import e from "cors";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function EditEmployee() {
    let { id } = useParams();//this variable will hold the id of the book to be edited. Has to be done as a function component
    //as new version only allows functions
    const [name, setName] = useState('');
    const [empPic, setPicture] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');
    const [pps, setPps] = useState('');
    const navigate = useNavigate();

    //will use axios to redirect http request
    useEffect(() => {
        axios.get('http://localhost:4000/api/employee/' + id)
            //when the response comes back call our methods
            .then((res) => {
                setName(res.data.name)
                setPicture(res.data.empPic)
                setAddress(res.data.address)
                setSalary(res.data.salary)
                setPps(res.data.pps)
            })
            .catch()
    }, []);//we need to put an empty array because we want executed only once


    const handleSubmit = (e) => {
        e.preventDefault();
        const editEmployee = {
            name: name,
            empPic: empPic,
            address: address,
            salary: salary,
            pps: pps
        }


        //console.log(editEmployee);
        //will generate a HTTP request with the url + the id 
        axios.put('http://localhost:4000/api/employee/' + id, editEmployee)
        
            .then((res) => {
               
                console.log(res);
                //once the operation s susccesseful it will redirect to the read page
                navigate('/showEmployees')
            })
            .catch();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Employee Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Employee Picture: </label>
                    <input type="text"
                        className="form-control"

                        value={empPic}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Employee Address: </label>
                    <input type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Employee Address: </label>
                    <input type="text"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Employee Address: </label>
                    <input type="text"
                        className="form-control"
                        value={pps}
                        onChange={(e) => setPps(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Employee" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}