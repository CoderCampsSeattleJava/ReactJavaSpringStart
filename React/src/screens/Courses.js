import React from 'react';
import axios from 'axios';
import backgroundtest from './images/backgroundtest.png';
import Spin from 'react-reveal/Spin';
import Shake from 'react-reveal/Shake';
import Center from 'react-center';
import ResponsiveContainer from 'react-responsive-widget';
import RubberBand from 'react-reveal/RubberBand';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { red100, blue900 } from 'material-ui/styles/colors';

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

        axios.post(`http://localhost:8080/api2/favcourses?course_name=${this.state.course_name}&course_id=${this.state.course_id}`)
            .then((response) => {
                this.props.history.push('./Dashboard');
                console.log(response, "Not Yet");
            });
    }

    render() {

        const learningCourses = {
            name: 'Courses',
            course1: 'Java',
            course2: 'HTML',
            course3: 'React.js',
        };
        const { course_name, course_id } = this.state
        const isEnabled =
            course_id.length > 1 &&
            course_name.length > 1;

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
                        <Center>  <select style={{ color: blue900, fontWeight: "bold", fontSize: "medium" }} value={this.state.course_name}
                            onChange={evt => this.setState({ course_name: evt.target.value })}
                        >
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "medium" }} value="N/A">Select Course</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="Java10">Java</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="HTML20">HTML</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="CSS30">CSS</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="EcmaScript40">EcmaScript JS</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="React.js50">React.js</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="JQuery60">JQuery</option>
                            <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="Bootstrap70">Bootstrap</option>
                        </select>
                            <select style={{ color: blue900, fontWeight: "bold", fontSize: "medium" }} value={this.state.course_id}
                                onChange={evt => this.setState({ course_id: evt.target.value })}
                            >
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "medium" }} value="N/A">Select Level</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="111">Beginner-L1</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="444">Medium-L2</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="888">Advance-L3</option>

                            </select>
                            <RubberBand><RubberBand>
                                <button style={{ color: blue900, fontWeight: "bold", fontSize: "medium" }} disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Submit!</button>
                            </RubberBand></RubberBand></Center>
                        <br />
                    </div>
                    <div className="header">
                        <p>Walae, Tyler, Nacho</p>
                    </div>
                </Center>
            </header>
            </ResponsiveContainer>
        );
    }
}

export default Courses;