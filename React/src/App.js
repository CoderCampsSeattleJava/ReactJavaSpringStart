import React, { Component } from 'react';
import axios from "axios";
import Register from './containers/Register';
import Youtube from './containers/Youtube';

 class App extends React.Component {

  
  render() {
    return (
      <div>
        <Register />
        <Youtube />
 
      </div>
    );
  }
}
 
 
export default Register;
    