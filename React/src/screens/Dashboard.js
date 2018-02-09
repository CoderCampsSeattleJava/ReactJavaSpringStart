import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem, PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron, Button } from 'react-bootstrap';






const Container1 = (props) => {
  return (
    <Grid className="position-absolute" >
      <Row>
        <Col xs={6} md={2}>
          <ListGroup>
            <ListGroupItem>Java Script</ListGroupItem>
            <ListGroupItem>React</ListGroupItem>
            <ListGroupItem>HTML</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={12} md={10}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>

      </Row>
    </Grid>
  );
}
const PageHeader1 = (props) => {
  return (

    <PageHeader pullCenter>
      Example page header <small>Subtext for header</small>
    </PageHeader>

  );
}
const Navbar1 = (props) => {
  return (


    <Navbar>
      <Navbar.Header>
        <Nav>
          <NavItem eventKey={4} href="/HomePage">
            Coder Dudes
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
        <PageHeader1 />
        <Container1 />


      </div>
    );
  };
};

export default Dashboard;