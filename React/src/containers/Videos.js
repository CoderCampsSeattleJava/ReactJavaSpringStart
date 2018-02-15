import React, { Component } from 'react';
import ResponsiveContainer from 'react-responsive-widget';
import Dashboard from '../screens/Dashboard';
import Iframe from 'react-iframe';
import backgroundtest from './images/backgroundtest.png';


class Videos extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('./Dashboard');

    }
    render() {
        return (
            <ResponsiveContainer>
                {/* <div style={{ fontSize: 'x-large', color: 'black' }}></div> */}
                <div style={{ backgroundColor: '#CCDECF' }}>
                    <h2 hover>Coder Dudes - Featured Videos</h2></div>

                <button onClick={this.handleClick}>Back to Dashboard</button>
                <img src={backgroundtest} width={120} height={120} />
                <h3>Coder's School of the Month</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V4w5R7_80G0"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br />


                <h3>A day at Coder Camp</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bb6Gqa_hXV8"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br />


                <h3>Final Project of the Month</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X_iQ5rgTadA"
                    frameBorder="50" allow="autoplay; encrypted-media" allowfullscreen></iframe><br />



            </ResponsiveContainer>
        );
    }
}

export default Videos;

