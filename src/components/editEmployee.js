import e from "cors";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../styles/CreateEmp.css'

import leftImage from '../assets/happyEmp.jpg'

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
        <div className='contact'>
            <div
                className='leftSide'
                style={{ backgroundImage: `url(${leftImage})` }}

            ></div>
            <div className='rightSide'>
                <h1> Edit an Employee </h1>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input name="name"
                        placeholder='Enter full name...'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>

                    <label>Employee Photo</label>
                    <input
                        placeholder='Paste the link for the photo...'
                        type="text"
                        value={empPic}
                        onChange={(e) => setPicture(e.target.value)}
                    ></input>

                    <label>Address</label>
                    <input
                        placeholder='Please enter employee address...'
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></input>

                    <label>Salary</label>
                    <input
                        placeholder='Enter employee salary...'
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    ></input>

                    <label>PPS</label>
                    <input
                        placeholder='Enter employee PPS number...'
                        type="text"
                        value={pps}
                        onChange={(e) => setPps(e.target.value)}
                    ></input>


                    <button type='submit'>Submit new details</button>
                </form>
            </div>
        </div>


    )
}