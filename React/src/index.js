import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './containers/Register';
import { render } from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import './styles.css';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem, PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron, Button } from 'react-bootstrap';
import VideoPlayer from './containers/VideoPlayer';
import {  Dashboard } from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import Youtube from './containers/Youtube';


 
const Router1 = () => (
    <Router>
    <div>
        <Route path="/HomePage" component={HomePage} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path='/Register' component={Register}/>
        <Route path='/VideoPlayer' component={VideoPlayer}/>
        <Route path='/Youtube' component={Youtube}/>
        
        
    </div>
    </Router>
);


render(
    <Router1 />, document.getElementById('root')
);










