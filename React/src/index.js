import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage, Dashboard, Register, Videos } from './screens';
import LoginForm from './LoginForm/LoginForm';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const Router1 = ({ store }) => (
  <Provider store={store}>
  <Router>
  <div>
      <Route path="/HomePage" component={HomePage} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Register" component={Register} />
      <Route path="/LoginForm" component={LoginForm} />
      <Route path='/Videos' component={Videos} />
  </div>    
  </Router>
  </Provider>
);


ReactDOM.render(
    <Router1 store={store} />, document.getElementById('root')
    
  );










