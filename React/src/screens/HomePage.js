import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";




const Navbar1 = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <NavbarBrand>
                    <a href="#Home">Coder Dudes</a>
                </NavbarBrand>
            </Navbar.Header>
            <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
      </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
      </NavItem>
                </Nav>
        </Navbar>
    );
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
            </div>
        );
    }
}



export default HomePage;