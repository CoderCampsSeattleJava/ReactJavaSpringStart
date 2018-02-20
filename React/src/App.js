import React, { Component } from 'react';
import Register from './containers/Register';
import Videos from './containers/Videos';

class App extends React.Component {

  
  render() {
    return (
      <div>
        <Register />
        <Videos />

     </div>
   );
 }
}

export default App;
