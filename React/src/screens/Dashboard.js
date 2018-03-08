import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron, Button, } from 'react-bootstrap';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.jpg';
import react from './images/react.png';
import java from './images/java.png';
import jquery from './images/jquery.png';
import backgroundtest from './images/backgroundtest.png';
import Zoom from 'react-reveal/Zoom';
import Tyler from './images/Tyler.jpg';
import Walae from './images/Walae.jpg';
import Nacho from './images/Nacho.jpg';
import net from './images/net.jpg';
import angular from './images/angular.jpg';
import spring from './images/spring.png';
import Center from "react-center";
import ResponsiveContainer from 'react-responsive-widget';
import Shake from 'react-reveal/Shake';
import $ from 'jquery';
import logoo from './images/logoo.png';

const Container1 = (props) => {
    return (
        <ResponsiveContainer>
            <Grid className="position-absolute" >
                <Row>
                    <Col xs={6} md={2}>
                        <ListGroup className="listgroupstyle">
                            <ListGroupItem eventKey={1}> Quick Links </ListGroupItem>
                            <ListGroupItem eventKey={2} href='https://www.javascript.com/'><img type="image" src={js} width={30} height={30} />  JS</ListGroupItem>
                            <ListGroupItem eventKey={3} href='https://www.java.com/'><img type="image" src={java} width={30} height={30} />  Java</ListGroupItem>
                            <ListGroupItem eventKey={4} href='https://www.w3schools.com/css/css_website_layout.asp'><img type="image" src={css} width={30} height={30} />  CSS</ListGroupItem>
                            <ListGroupItem eventKey={5} href='https://www.w3schools.com/html/'>< img type="image" src={html} width={30} height={30} />  HTML</ListGroupItem>
                            <ListGroupItem eventKey={6} href='https://jquery.com/'><img type="image" src={jquery} width={30} height={30} />  JQuery</ListGroupItem>
                            <ListGroupItem eventKey={7} href='https://reactjs.org'><img type="image" src={react} width={30} height={30} />  React.js</ListGroupItem>
                            <ListGroupItem eventKey={8} href='https://angularjs.org/'>< img type="image" src={angular} width={30} height={30} />  Angular.js</ListGroupItem>
                            <ListGroupItem eventKey={9} href='https://projects.spring.io/spring-boot/'>< img type="image" src={spring} width={30} height={30} /> Spring</ListGroupItem>
                            <ListGroupItem eventKey={10} href='https://www.microsoft.com/net/'>< img type="image" src={net} width={30} height={30} /> .Net</ListGroupItem>

                        </ListGroup>
                    </Col>
                    <Col xs={12} md={10}>
                        <Jumbotron><header className='header1'>
                            <Zoom><p>Hello, world! We are Coder Dudes</p></Zoom>
                            <p>
                                Coder Dudes is a website created in order to help students that attend Coder BootCamps.
                            It was created in February 2018 by Tyler, Walae and Nacho. We wanted an open
                           alternative for new Coders. It features questions and answers on a wide range of topics
                           in computer programming.
           </p>
                            <p>
                                <a>Learn more about the founders</a><br />
                                <Center>
                                    <Button bsStyle="primary" href='https://www.linkedin.com/in/tyler-fuqua-684930111/'><img type="image" src={Tyler} width={60} height={60} />  Click me</Button>
                                    <Button bsStyle="primary" href='https://www.linkedin.com/in/walelign-walae-g-602528100/'><img type="image" src={Walae} width={60} height={60} />  Click me</Button>
                                    <Button bsStyle="primary" href='https://www.linkedin.com/in/ignacio-luciano-58b206aa/'><img type="image" src={Nacho} width={60} height={60} />  Click me</Button>
                                </Center>
                            </p>
                            <Shake><Center>
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                                <img className="mainpagedudes" src={backgroundtest} width={60} height={60} />
                            </Center></Shake>
                        </header></Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </ResponsiveContainer>
    );
}
const Navbar1 = (props) => {
return (
        <div className="wrapper">
            <header>
                <nav>
                    <div className="menu-icon">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="logo">
                        <img className="logoo" src={logoo} />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="/HomePage">Home</a></li>
                            <li>  <a href="/Videos">Videos</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <Container1 />
            </div>
        )
    }
}



export default Dashboard;