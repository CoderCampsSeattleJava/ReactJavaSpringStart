import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={this.props.auth.logout}>Logout</button> :
      <button onClick={this.props.auth.login}>Login</button>;
    
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

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                {/* <img src={logo} width={600} height={550} /> */}
                <a href="/HomePage"><h1>Code Lovers</h1></a>
            </div>
        );
    }
}



