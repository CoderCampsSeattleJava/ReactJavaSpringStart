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
import { red100, blue900, blueA100, white100 } from 'material-ui/styles/colors';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api3/favourites?user_id=${this.props.userId}&course_id=${this.state.course_id}`)
            .then((response) => {
                // this.props.history.push('./LoginPage');
                console.log(response, "Saved to Favs");
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
        const { course_id } = this.state
        let isEnabled =
            course_id > 0;

        return (
            <ResponsiveContainer><header>
                <Center>
                    <div>
                        <Center>
                            <RubberBand>
                                <div style={{ fontWeight: "bold", color: "white", fontSize: "xx-large" }}>
                                    Add COURSES to your FAVOURITES
</div>
                                <div>
                                    <Button className='backtodash' bsStyle="primary" style={{ color: white100, fontWeight: "bold", fontSize: "large" }} onClick={this.handleClick1}>Back to Dashboard</Button>
                                    <Button className='backtodash' bsStyle="primary" style={{ color: white100, fontWeight: "bold", fontSize: "large" }} onClick={this.handleClick2}>Back to Home</Button>
                                    <Button className='backtodash' bsStyle="primary" style={{ color: white100, fontWeight: "bold", fontSize: "large" }} onClick={this.handleClick3}>Go to Videos</Button>
                                </div>
                            </RubberBand>
                        </Center>

                        <Center><Spin><Spin> <Spin><Spin><Shake> <Shake><Spin><Spin> <Spin><Spin><Spin><Spin><Spin><Spin><Shake><Shake><Spin><Spin><Spin><Spin>
                            <img src={backgroundtest} width={250} height={250} />
                        </Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Spin></Shake></Shake></Spin></Spin></Spin></Spin></Center>
                        <Center>
                            <select size='3' multiple value={this.state.course_id}
                                onChange={evt => this.setState({ course_id: evt.target.value })}
                            >
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="1">Java</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="2">HTML</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="3">CSS</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="4">EcmaScript JS</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="5">React.js</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="6">JQuery</option>
                                <option style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} value="7">Bootstrap</option>
                            </select>

                            <RubberBand>
                                <RubberBand>
                                    <Button style={{ color: blue900, fontWeight: "bold", fontSize: "large" }} bsStyle="primary" disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Submit!</Button>
                                </RubberBand>
                            </RubberBand>
                        </Center>
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