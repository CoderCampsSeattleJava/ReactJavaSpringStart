import React, { Component } from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggle, Collapse, NavItem, Nav } from "react-bootstrap";
=======
import { Navbar, Nav, NavItem } from "react-bootstrap";


const Navbar1 = () => {
    return (
        <div>
        <Navbar inverse> 
        <a href="/HomePage"><h1>Code Lovers</h1></a>
            <Navbar.Header> 
               
                <Nav>
                    <NavItem eventKey={4} href="/HomePage">
                        Coder Dudes
                        
            </NavItem>
                </Nav>
                <Navbar.Toggle />
            </Navbar.Header>
            <Nav pullRight>
                    <NavItem eventKey={1} href="/Register">
                        Register
      </NavItem>
                    <NavItem eventKey={2} href="/Login">
                        Login
      </NavItem>
                </Nav>
        </Navbar>
        </div>
    );
}
>>>>>>> master

class HomePage extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="wrapper">
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="logo">
                            Coder Dudes
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="header">
                        <h2>Coder Dudes Are Awesome</h2>
                        <h5>Life is so Great</h5>
                        <p>Walae, Tyler, Nacho  </p>
                    </div>

                </header>
                <main className="text-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-30">
                                <p align="justify">Some text will be writen </p>
                            </div>
                        </div>
                    </div>
                </main>
=======
            <div>
                <Navbar1 />
                {/* <img src={logo} width={600} height={550} /> */}
                <a href="/HomePage"><h1>Code Lovers</h1></a>
>>>>>>> master
            </div>

        );
    }
}



export default HomePage;

