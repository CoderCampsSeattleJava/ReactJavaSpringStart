import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './containers/Register';
import ReactBootstrap from 'react-bootstrap';
import './styles.css';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem, PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron, Button } from 'react-bootstrap'
import { HomePage, Dashboard, Register, Videos } from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Videos from './containers/Videos';
import Weather from './containers/weather';


 
const Router1 = () => (
   <Router>
   <div>
       <Route path="/HomePage" component={HomePage} />
       <Route path="/Dashboard" component={Dashboard} />
       <Route path="/Register" component={Register}/>
       <Route path='/Videos' component={Videos}/>
          </div>
   </Router>
);


ReactDOM.render(
    <Router1 />, document.getElementById('root')
    
  );










