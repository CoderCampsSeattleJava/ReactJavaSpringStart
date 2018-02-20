import React from 'react';
import { render } from 'react-dom';
import { HomePage, Dashboard, Register, VideoPlayer, Videos } from './screens';
import { BrowserRouter as Router, Route } from 'react-router-dom';


 
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










