import React, { Component } from 'react';
import Register from './containers/Register';
import Videos from './containers/Videos';
import Weather from './containers/weather';

class App extends React.Component {

  
  render() {
    return (
      <div>
        <Register />
        <Videos />
        <Weather />

     </div>
   );
 }
}

export default App;
