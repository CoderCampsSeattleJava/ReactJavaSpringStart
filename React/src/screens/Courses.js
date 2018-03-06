import React from 'react';
import axios from 'axios';
import backgroundtest from './images/backgroundtest.png';
import Spin from 'react-reveal/Spin';
import Shake from 'react-reveal/Shake';
import Center from 'react-center';
import ResponsiveContainer from 'react-responsive-widget';
import RubberBand from 'react-reveal/RubberBand';
import { connect } from 'react-redux';

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course_name: '',
            course_id: '',
        };

        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleSubmit1(e) {
        e.preventDefault();
        console.log("Course name posted");
    }

    handleSubmit2(e) {
        e.preventDefault();
        console.log("Course ID posted");
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api3/favourites?user_id=${this.props.userId}&course_id=${this.state.course_id}`)
            .then((response) => {

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
            <ResponsiveContainer>
                <Center>
                    <div>
                   <Center> <RubberBand> <h2>Add Multiple COURSES to your FAVOURITES, do not forget your LEVEL :)</h2></RubberBand> </Center>
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