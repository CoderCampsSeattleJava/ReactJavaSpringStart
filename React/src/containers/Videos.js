import React, { Component } from 'react';
import ResponsiveContainer from 'react-responsive-widget';
import Dashboard from '../screens/Dashboard';
import Iframe from 'react-iframe';
import backgroundtest from './images/backgroundtest.png';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Center from 'react-center';
import { Button } from 'react-bootstrap';


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

                <div style={{ backgroundColor: '#CCDECF' }}>
                    <Center><h2>Coder Dudes - Featured Videos</h2></Center></div>

                <Button bsStyle="primary" onClick={this.handleClick}>Back to Dashboard</Button>
                <Zoom><img src={backgroundtest} width={120} height={120} /></Zoom>

                <Center> <Roll><h3>Coder's School of the Month</h3></Roll> </Center>
                <Center>   <Zoom><iframe width="560" height="315" src="https://www.youtube.com/embed/V4w5R7_80G0"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br /></Zoom>
                </Center>

                <Center>   <Roll left><h3>A day at Coder Camp</h3></Roll></Center>
                <Center> <Zoom><iframe width="560" height="315" src="https://www.youtube.com/embed/bb6Gqa_hXV8"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br /></Zoom>
                </Center>

                <Center>  <Roll><h3>Final Project of the Month</h3></Roll></Center>
                <Center>    <Zoom> <iframe width="560" height="315" src="https://www.youtube.com/embed/X_iQ5rgTadA"
                    frameBorder="50" allow="autoplay; encrypted-media" allowfullscreen></iframe><br /></Zoom>
                </Center>

            </ResponsiveContainer>
        );
    }
}

export default Videos;

