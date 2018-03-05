import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem, PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron, Button, } from 'react-bootstrap';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.jpg';
import react from './images/react.png';
import java from './images/java.png';
import jquery from './images/jquery.png';
import backgroundtest from './images/backgroundtest.png';
import Zoom from 'react-reveal/Zoom';



const Container1 = (props) => {
  return (
    <Grid className="position-absolute" >
      <Row>
        <Col xs={6} md={2}>
          <ListGroup className="listgroupstyle">
            <ListGroupItem eventKey={1} href='https://www.javascript.com/'>< img type="image" src={js} width={30} height={30} />  JavaScript</ListGroupItem>
            <ListGroupItem eventKey={2} href='https://www.java.com/'>< img type="image" src={java} width={30} height={30} />  Java</ListGroupItem>
            <ListGroupItem eventKey={3} href='https://www.w3schools.com/css/css_website_layout.asp'>< img type="image" src={css} width={30} height={30} />  CSS</ListGroupItem>
            <ListGroupItem eventKey={4} href='https://www.w3schools.com/html/'>< img type="image" src={html} width={30} height={30} />  HTML</ListGroupItem>
            <ListGroupItem eventKey={5} href='https://jquery.com/'>< img type="image" src={jquery} width={30} height={30} />  JQuery</ListGroupItem>
            <ListGroupItem eventKey={6} href='https://reactjs.org'>< img type="image" src={react} width={30} height={30} />  React.js</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={12} md={10}>
          <Jumbotron><header className='header1'>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
             extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
             extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
             extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
             extra attention to featured content or information.
           </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </header></Jumbotron>
        </Col>

      </Row>
    </Grid>
  );
}

const Navbar1 = (props) => {
  return (
    <Navbar className='header2'>
      <Navbar.Header>
        <Nav>
          <NavItem eventKey={4} href="/HomePage">
            <div>
              <Zoom><img src={backgroundtest} width={150} height={150} /></Zoom></div>
            <h1> Coder Dudes </h1>
          </NavItem>
        </Nav>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#Logout">
          Logout
   </NavItem>
        <NavItem eventKey={2} href="https://github.com/">
          Github
   </NavItem>
        <NavDropdown eventKey={3} title="Documentation" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="https://reactjs.org/">React</MenuItem>
          <MenuItem eventKey={3.2} href="https://react-bootstrap.github.io/">React Bootstrap</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

  );
}



// ROOT Route Like App.js

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <Container1 />
      </div>
    );
  };
};

export default Dashboard;