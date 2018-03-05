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
import Tyler from './images/Tyler.jpg';
import Walae from './images/Walae.jpg';
import Nacho from './images/Nacho.jpg';
import Center from "react-center";


const Container1 = (props) => {
  return (
    <Grid className="position-absolute" >
      <Row>
        <Col xs={6} md={2}>
          <ListGroup className="listgroupstyle">
            <ListGroupItem eventKey={1}> Quick Links </ListGroupItem>
            <ListGroupItem eventKey={2} href='https://www.javascript.com/'><img type="image" src={js} width={0} height={30} />  JavaScript</ListGroupItem>
            <ListGroupItem eventKey={3} href='https://www.java.com/'><img type="image" src={java} width={30} height={30} />  Java</ListGroupItem>
            <ListGroupItem eventKey={4} href='https://www.w3schools.com/css/css_website_layout.asp'><img type="image" src={css} width={30} height={30} />  CSS</ListGroupItem>
            <ListGroupItem eventKey={5} href='https://www.w3schools.com/html/'>< img type="image" src={html} width={30} height={30} />  HTML</ListGroupItem>
            <ListGroupItem eventKey={6} href='https://jquery.com/'><img type="image" src={jquery} width={30} height={30} />  JQuery</ListGroupItem>
            <ListGroupItem eventKey={7} href='https://reactjs.org'><img type="image" src={react} width={30} height={30} />  React.js</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={12} md={10}>
          <Jumbotron><header className='header1'>
            <h1>Hello, world! We are Coder Dudes</h1>
            <p>
              Coder Dudes is a website created in order to help students that attend Coder BootCamps.
            It was created in February 2018 by Tylor, Walae and Nacho. We wanted an open
           alternative for new Coders. It features questions and answers on a wide range of topics
           in computer programming.
           </p>
            <p>
              <a>Learn more about the founders</a><br />
                <Center>
                  <Button bsStyle="primary" href='https://www.linkedin.com/in/tyler-fuqua-684930111/'><img type="image" src={Tyler} width={50} height={50} />Tyler</Button>
                <Button bsStyle="primary" href='https://www.linkedin.com/in/walelign-walae-g-602528100/'><img type="image" src={Walae} width={50} height={50} />Walae</Button>
                <Button bsStyle="primary" href='https://www.linkedin.com/in/ignacio-luciano-58b206aa/'><img type="image" src={Nacho} width={50} height={50} />Nacho</Button>
              </Center>
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