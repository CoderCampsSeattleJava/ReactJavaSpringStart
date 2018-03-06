import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage, Dashboard, Register, Videos, Courses, ShoppingCart } from './screens';
import LoginPage from './LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

const Router1 = () => (
  <Provider store={store}>
  <Router>
  <div>
      <Route path='/' exact={true} component={HomePage} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Register" component={Register} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path='/Videos' component={Videos} />
      <Route path='/Courses' component={Courses} />
      <Route path='/ShoppingCart' component={ShoppingCart} />
  </div>    
  </Router>
  </Provider>
);


ReactDOM.render(
    <Router1 />, document.getElementById('root')
    
  );

