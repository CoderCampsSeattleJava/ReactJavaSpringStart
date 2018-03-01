import React from 'react';
import axios from 'axios';
import backgroundtest from './images/backgroundtest.png';
import Spin from 'react-reveal/Spin';
import Shake from 'react-reveal/Shake';
import Center from 'react-center';
import ResponsiveContainer from 'react-responsive-widget';
import RubberBand from 'react-reveal/RubberBand';

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
        course_name.length > 1 ;

        return (
            <ResponsiveContainer>
                <Center>
                    <div>
                   <Center> <RubberBand> <h2>Add Multiple COURSES to your FAVOURITES, do not forget your LEVEL :)</h2></RubberBand> </Center>
                      <Center>  <Spin><Spin> <Spin><Spin><Shake> <Shake><Spin><Spin> <Spin><Spin><Spin><Spin><Spin><Spin><Shake><Shake><Spin><Spin><Spin><Spin>
                         <img src={backgroundtest} width={250} height={250} />
                        </Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Center>
                      <Center>  <select value={this.state.course_name}
                            onChange={evt => this.setState({ course_name: evt.target.value })}

                        // onChange={this.handleSubmit1}
                        >
                            <option value="N/A">Select Course</option>
                            <option value="Java10">Java</option>
                            <option value="HTML20">HTML</option>
                            <option value="CSS30">CSS</option>
                            <option value="EcmaScript40">EcmaScript JS</option>
                            <option value="React.js50">React.js</option>
                            <option value="JQuery60">JQuery</option>
                            <option value="Bootstrap70">Bootstrap</option>
                        </select>
                        <select value={this.state.course_id}
                            onChange={evt => this.setState({ course_id: evt.target.value })}
                        // onChange={this.handleSubmit2}
                        >
                            <option value="N/A">Select Level</option>
                            <option value="111">Beginner-L1</option>
                            <option value="444">Medium-L2</option>
                            <option value="888">Advance-L3</option>

                        </select>
                        <RubberBand><RubberBand><button disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Submit!</button></RubberBand></RubberBand></Center>
                    </div>
                </Center>
            </ResponsiveContainer>

        );
    }
}

export default Courses;