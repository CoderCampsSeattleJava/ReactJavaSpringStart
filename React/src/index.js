import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
<<<<<<< HEAD
import { HomePage, Dashboard, Videos, Register} from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
=======
import { HomePage, Dashboard, Register, Videos, Courses, ShoppingCart } from './screens';
import {  BrowserRouter as Router, Route } from 'react-router-dom';


>>>>>>> master
 
const Router1 = () => (
   <Router>
   <div>
       <Route path="/Homepage" component={HomePage} />
       <Route path="/Dashboard" component={Dashboard} />
       <Route path="/Register" component={Register}/>
<<<<<<< HEAD
       <Route path="/Videos" component={Videos}/>
=======
       <Route path='/Videos' component={Videos}/>
       <Route path='/Courses' component={Courses}/>
           <Route path='/ShoppingCart' component={ShoppingCart}/>

>>>>>>> master
          </div>
   </Router>
);


ReactDOM.render(
    <Router1 />, document.getElementById('root')
    
  );

