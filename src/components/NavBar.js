import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navBar.css'

function NavBar() {
    // will use useState to set false when 
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavBar = () => {
        setOpenLinks(!openLinks);//change the valeu to opposite of what actually is
    };
    return (
        <div className='navbar'>
            {/* set the id to open or close in order to show the links when the page is shrink */}
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/showEmployees'>Show Employees</Link>
                    <Link to='/createEmployee'>Create Employee</Link>
                    <Link to='/search'>Search Employee</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/showEmployees'>Show Employees</Link>
                <Link to='/createEmployee'>Create Employee</Link>
                <Link to='/search'>Search Employee</Link>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}
export default NavBar