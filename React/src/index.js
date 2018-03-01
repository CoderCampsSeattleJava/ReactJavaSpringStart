import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { HomePage, Dashboard, Register, Videos, Courses, ShoppingCart } from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';


 
const Router1 = () => (
   <Router>
   <div>
       <Route path="/Homepage" component={HomePage} />
       <Route path="/Dashboard" component={Dashboard} />
       <Route path="/Register" component={Register}/>
       <Route path='/Videos' component={Videos}/>
       <Route path='/Courses' component={Courses}/>
           <Route path='/ShoppingCart' component={ShoppingCart}/>

          </div>
   </Router>
);


ReactDOM.render(
    <Router1 />, document.getElementById('root')
    
  );

