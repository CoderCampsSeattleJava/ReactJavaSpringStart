//import React from 'react';
//import ReactDOM from 'react-dom';
//import './styles.css';
//import App from './App';
//import HomePage from './screens/HomePage';
//import Dashboard  from './screens/Dashboard';



        // import  { BrowserRouter as Router, Route }  from 'react-router-dom';
         // //import { BrowserRouter as Router, Router, Link } from 'react-router-dom'



               // const Router1 = () => (
            //    <Router>
              //     <div>
            //       <Route path="/HomePage" component={HomePage} />
              //         <Route path="/Dashboard" component={Dashboard} />
           //         <Route path='/Register' component={Register}/>
           //     </div>
          //     </Router>
         //  );
 
 
                   //render(
                  // <Router1 />, document.getElementById('root')
                  //);
                 //render(
                      //<Router1 />, domcument.getElementById('root')
                    //);
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(  <Dashboard />, document.getElementById('root')
//);

//ReactDOM.render(
  //<HomePage  />,    document.getElementById('root')  
//);


// 
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
import Videos from './containers/Videos';


 
const Router1 = () => (
    <Router>
    <div>
        <Route path="/HomePage" component={HomePage} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path='/Register' component={Register}/>
        <Route path='/VideoPlayer' component={VideoPlayer}/>
        <Route path='/Videos' component={Videos}/>
        
        
    </div>
    </Router>
);


render(
    <Router1 />, document.getElementById('root')
);










