import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//importing routing to the application. It will allow to change the url
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Home } from './components/Home';
import { CreateEmployee } from './components/createEmployee';
import { EditEmployee } from './components/editEmployee';
import { ShowEmployee } from './components/EmployeeList';


//imports to be used in the navigation bar
//bootstrap has a big library of buttons/nav bars, etc
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


class App extends React.Component {
  render() {//render is what will displayed 

    return (
      //include router encapsulate the lot inside Router
      //adding the navigation bar inside div    
      <div className="App">
        <Router>

          <NavBar />

          {/* Routes is where we are going to show a different component*/}
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/showEmployees' element={<ShowEmployee />}></Route>
            <Route path='/createEmployee' element={<CreateEmployee />}></Route>
            <Route path='/edit/:id' element={<EditEmployee />}></Route>

          </Routes>
          <Footer />


        </Router>
      </div>
    );
  }
}

export default App;
