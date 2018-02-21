import { PageHeader, Select } from 'react-bootstrap';
import Center from 'react-center';
import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import backgroundtest from './images/backgroundtest.png';

class Plans extends Component {
    render() {
        return (
            <Center>
                <div>
                <Zoom><img src={backgroundtest} width={150} height={150} /></Zoom>
                    <h3>Select your courses from the menu</h3>
                </div><br />
                <div>
                <select className='courses' type="radio">
                    <option>JAVA</option>
                    <option>HTML</option>
                    <option>React.js</option>
                    <option>HTML</option>
                    <option>CSS</option>
                </select>
                </div>
            </Center>
        );
    };
};

export default Plans;