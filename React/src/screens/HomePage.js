import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggle, Collapse, NavItem, Nav } from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
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
            </div>

        );
    }
}



export default HomePage;

