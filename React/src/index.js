import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage, Dashboard, Register, Videos, Courses } from './screens';
import LoginForm from './LoginForm/LoginForm';
import { Provider } from 'react-redux';
import { store } from './redux/store';



const Router1 = ({ store }) => (
  <Provider store={store}>
  <Router>
  <div>
      <Route path='/' exact={true} component={HomePage} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Register" component={Register} />
      <Route path="/LoginForm" component={LoginForm} />
      <Route path='/Videos' component={Videos} />
      <Route path='/Courses' component={Courses} />
      <Route path='/ShoppingCart' component={ShoppingCart} />
  </div>    
  </Router>
  </Provider>
);


ReactDOM.render(
    <Router1 store={store} />, document.getElementById('root')
    
  );

