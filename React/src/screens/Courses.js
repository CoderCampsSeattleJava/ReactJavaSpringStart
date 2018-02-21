import { PageHeader, Select } from 'react-bootstrap';
import Center from 'react-center';
import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import backgroundtest from './images/backgroundtest.png';
import axios from 'axios';


class Courses extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            course_name: '',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('./Dashboard');
    }

    onSubmit = (e) => {

        axios.post(`http://localhost:8080/api/post?username=${this.state.username}&course_name=${this.state.course_name}`)
            .then((Response) => {
                console.log(Response, "Courses selected");

            });

    }

    render() {

        return (
            <Center>
                <div><h3>Select your courses from the menu</h3>< br />
                    <Bounce right><img src={backgroundtest} width={100} height={100} /></Bounce>

                </div>
                <input id='username'
                    value={this.state.username}
                    onChange={evt => this.setState({ username: evt.target.value })}
                    type="text"
                    title="Must contain A-Z a-z 0-9 _!$ only)"
                    placeholder='Re-Enter Username'
                    minLength='8'
                    maxLength='15'
                    required
                /><br />

                <div>
                    <select class='courses' type='selectpicker'><br />
                        <option>JAVA</option>
                        <option>HTML</option>
                        <option>React.js</option>
                        <option>HTML</option>
                        <option>CSS</option>
                    </select>
                </div>

                <button type='submit' onClick={this.handleClick}>Done</button>

            </Center>

        );
    };
};


export default Courses;