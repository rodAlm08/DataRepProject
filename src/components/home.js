import React from "react";
import "../styles/Home.css";
import BannerImage from '../assets/happyEmp.jpg'

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Home extends React.Component {
    render() {
        return (
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer" >
                    <h1> Employee Management System </h1>
                    <br></br>
                    <p> Data Rep on it's core! </p>
                </div>
            </div>
        );
    }
}