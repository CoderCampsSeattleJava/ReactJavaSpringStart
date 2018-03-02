import React, { Component } from 'react';
import ResponsiveContainer from 'react-responsive-widget';
import backgroundtest from './images/backgroundtest.png';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';
import Center from 'react-center';
import { Button } from 'react-bootstrap';
import facebookicon from './images/facebookicon.png';
import indeedicon from './images/indeedicon.png';
import linkedinicon from './images/linkedinicon.png';
import instagramicon from './images/instagramicon.png';
import youtubeicon from './images/youtubeicon.png';
import axios from 'axios';

class Videos extends Component {
    constructor() {
        super();
        this.state = {
            course_name: '',
            course_id: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('./Dashboard');
    }

    handleSubmit1(e) {
        // e.preventDefault();
        console.log("Added to Fav 1");
    }

    handleSubmit2(e) {
        // e.preventDefault();
        console.log("Added to Fav 2");
    }

    handleSubmit3(e) {
        // e.preventDefault();
        console.log("Added to Fav 3");
    }

    onSubmit = (e) => {

        axios.post(`http://localhost:8080/api2/favcourses?course_name=${this.state.course_name}&course_id=${this.state.course_id}`)
            .then((response) => {

                console.log(response, "FAVOURITES");
            });
    }
    render() {
        return (
            <ResponsiveContainer><header>

                <a href='https://www.youtube.com/'>< img type="image" title='YouTube.com' src={youtubeicon} width={30} height={30} align='right' /></a>
                <a href='https://www.facebook.com'>< img type="image" title="facebook.com" src={facebookicon} width={30} height={30} align='right' /></a>
                <a href='https://www.instagram.com/'>< img type="image" title="instagram" src={instagramicon} width={30} height={30} align='right' /></a>
                <a href='https://www.linkedin.com/'>< img type="image" title='linkedIn' src={linkedinicon} width={30} height={30} align='right' /></a>
                <a href='https://www.indeed.com/'>< img type="image" title='indeed' src={indeedicon} width={30} height={30} align='right' /></a>

                <div style={{ backgroundColor: '#CCDECF' }}>
                    <Center><h2>Coder Dudes - Featured Videos</h2></Center></div>

                <Button bsStyle="primary" onClick={this.handleClick}>Back to Dashboard</Button>
                <Zoom><img src={backgroundtest} width={120} height={120} /></Zoom>

                <Center> <Roll><h3>Coder's School of the Month</h3></Roll> </Center>
                <Center>   <Wobble><iframe title="CoderSchoolOfTheMonth" width="560" height="315" src="https://www.youtube.com/embed/V4w5R7_80G0"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br /></Wobble></Center>

                <select value={this.state.course_id} onChange={this.handleSubmit1}>
                    <option value="N/A">Open Menu</option>
                    <option value="000">Add to Favorites</option>
                    <option value="000">LIKE video</option></select>


                <Center>   <Roll left><h3>A day at Coder Camps</h3></Roll></Center>
                <Center> <Wobble><iframe title="ADayatCoderCamp" width="560" height="315" src="https://www.youtube.com/embed/bb6Gqa_hXV8"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br /></Wobble> </Center>

                <select value={this.state.course_id} onChange={this.handleSubmit2}>
                    <option value="N/A">Open Menu</option>
                    <option value="000">Add to Favorites</option>
                    <option value="000">LIKE video</option></select>

                <Center>  <Roll><h3>Final Project of the Month</h3></Roll></Center>
                <Center>    <Wobble> <iframe title="FInalProjectofTheMonth" width="560" height="315" src="https://www.youtube.com/embed/X_iQ5rgTadA"
                    frameBorder="50" allow="autoplay; encrypted-media" allowFullScreen></iframe><br /></Wobble></Center>

                <select value={this.state.course_name} onChange={this.handleSubmit3}>
                    <option value="N/A">Open Menu</option>
                    <option value="000">Add to Favorites</option>
                    <option value="000">LIKE video</option></select>

                <Center>
                    <div>
                        <h6>Thank you for visiting our website!</h6>
                    </div>
                </Center>

                <Button id='backtodash' bsStyle="primary" onClick={this.handleClick}>Back to Dashboard</Button>
           </header> </ResponsiveContainer>
        );
    }
}

export default Videos;
