import React from 'react';
import { render } from 'react-dom';
import 'react-bootstrap';
import './styles.css';
import {  HomePage, Dashboard } from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
 
 
const Router1 = () => (
    <Router>
    <div>
        <Route path="/HomePage" component={HomePage} />
        <Route path="/Dashboard" component={Dashboard} />
    </div>
    </Router>
);
 
 
render(
    <Router1 />, document.getElementById('root')
);
 
 
 
 
 