import React from 'react';
import axios from 'axios';
import backgroundtest from './images/backgroundtest.png';
import Spin from 'react-reveal/Spin';
import Shake from 'react-reveal/Shake';
import Center from 'react-center';
import ResponsiveContainer from 'react-responsive-widget';
import RubberBand from 'react-reveal/RubberBand';
<<<<<<< HEAD
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { red100, blue900 } from 'material-ui/styles/colors';
import { Button } from 'react-bootstrap';
=======
import { connect } from 'react-redux';
>>>>>>> master

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course_name: '',
            course_id: '',
        };


        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);

    }

    handleClick1(e) {
        e.preventDefault();
        this.props.history.push('./Dashboard');
    }
    handleClick2(e) {
        e.preventDefault();
        this.props.history.push('./Homepage');
    }
    handleClick3(e) {
        e.preventDefault();
        this.props.history.push('./Videos');
    }

    // handleSubmit1(e) {
    //     e.preventDefault();
    //     console.log("Course name posted");
    // }

    // handleSubmit2(e) {
    //     e.preventDefault();
    //     console.log("Course ID posted");
    // }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api3/favourites?user_id=${this.props.userId}&course_id=${this.state.course_id}`)
            .then((response) => {
                this.props.history.push('./Dashboard');
                console.log(response, "Not Yet");
            });
    }

    render() {
        console.log("UserID: " + this.props.userId);
        const learningCourses = {
            name: 'Courses',
            course1: 'Java',
            course2: 'HTML',
            course3: 'React.js',
        };
        const { course_name, course_id } = this.state
        let isEnabled =
        course_id > 0; 

        return (
            <ResponsiveContainer><header>
                <Center>
                    <div>
                        <Center> <RubberBand>
                            <div style={{ fontWeight: "bold", color: "white", fontSize: "xx-large" }}>
                                Add COURSES to your FAVOURITES</div>
                        </RubberBand> </Center>

                        <Center>  <Spin><Spin> <Spin><Spin><Shake> <Shake><Spin><Spin> <Spin><Spin><Spin><Spin><Spin><Spin><Shake><Shake><Spin><Spin><Spin><Spin>
                            <img src={backgroundtest} width={250} height={250} />
                        </Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Center>
                      <Center>  <select value={this.state.course_id}
                            onChange={evt => this.setState({ course_id: evt.target.value })}

                        // onChange={this.handleSubmit1}
                        >
                            <option value="0">Select Course</option>
                            <option value="1">Java</option>
                            <option value="2">HTML</option>
                            <option value="3">CSS</option>
                            <option value="4">EcmaScript JS</option>
                            <option value="5">React.js</option>
                            <option value="6">JQuery</option>
                            <option value="7 ">Bootstrap</option>
                        </select>

                        <RubberBand><RubberBand><button disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Submit!</button></RubberBand></RubberBand></Center>
                    </div>
                </Center>
            </header>
            </ResponsiveContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
    };
};

export default connect(mapStateToProps)(Courses);