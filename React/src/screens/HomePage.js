import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Navbar1 = (props) => {
   return (
       <Navbar>
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