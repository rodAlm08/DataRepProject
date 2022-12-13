import React from 'react';
import './App.css';
import { Home } from './components/home';
import { CreateEmployee } from './components/createEmployee';
import { EditEmployee } from './components/editEmployee';
import { ShowEmployee } from './components/showEmployees';


//imports to be used in the navigation bar
//bootstrap has a big library of buttons/nav bars, etc
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//importing routing to the application. It will allow to change the url
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




class App extends React.Component {
  render() {//render is what will displayed 

    return (
      //include router encapsulate the lot inside Router
      //adding the navigation bar inside div    

      <Router>

        <div className="App">

          {/* the nav bar changes the url for the application*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/showEmployees">Show Employees</Nav.Link>
                <Nav.Link href="/createEmployee">Create Employee</Nav.Link>

              </Nav>
            </Container>
          </Navbar>

          {/* Routes is where we are going to show a different component*/}
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/showEmployees' element={<ShowEmployee />}></Route>
            <Route path='/createEmployee' element={<CreateEmployee />}></Route>
            <Route path='/edit/:id' element={<EditEmployee />}></Route>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
