import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Navbar1 = (props) => {
  return (
      <div>
      <Navbar inverse> 
      <a href="#"><h1>Code Lovers</h1></a>
          <Navbar.Header> 
             
              <Nav>
                  <NavItem eventKey={4} href="/HomePage">
                      Coder Dudes
                      
          </NavItem>
              </Nav>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="/Dashboard">
                      Dashboard
      </NavItem>
              </Nav>
              <Nav pullRight>
                  <NavItem eventKey={2} href="#Login">
                      Login
      </NavItem>
                  <NavItem eventKey={3} href="/Register">
                      Register
      </NavItem>
              </Nav>
          </Navbar.Collapse>
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
              <a href="#"><h1>Code Lovers</h1></a>
          </div>
      );
  }
}



export default HomePage;


