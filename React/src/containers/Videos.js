import React, { Component } from 'react';
import ResponsiveContainer from 'react-responsive-widget';
import Dashboard from '../screens/Dashboard';





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
                <div style={{ fontSize: '90', color: 'black' }}>
                    <div clasName='videos' style={{ backgroundColor: '#0F86AC' }}>
                        <h2>Coder Dudes - Featured Videos</h2>
                    </div>

                    <h3>Coder's School of the Month</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/V4w5R7_80G0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <button onClick={this.handleClick}>Back to Dashboard</button>

                    <h3>A day at Coder Camp</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bb6Gqa_hXV8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <button onClick={this.handleClick}>Back to Dashboard</button>

                    <h3>Final Project of the Month</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X_iQ5rgTadA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <button onClick={this.handleClick}>Back to Dashboard</button>

                </div>
            </ResponsiveContainer>
        );
    }
}

export default Videos;

