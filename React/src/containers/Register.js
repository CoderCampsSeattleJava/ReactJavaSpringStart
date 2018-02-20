import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { red700, blue700, grey700 } from 'material-ui/styles/colors';
import Center from 'react-center';
import BackgroundImage from 'react-background-image-loader';
import Dashboard from '../screens/Dashboard';
import './backgroundtest.png';


function validate(first_name, last_name, home_state, email, username, password, password_conf) {

  const errors = [];

  if (first_name.length === 0) {
    errors.push("First name can't be empty");
  }
  if (last_name.length === 0) {
    errors.push("Last name can't be empty");
  }
  if (home_state.length === 0) {
    errors.push("Please enter your State Initials");
  }
  if (username.length === 0) {
    errors.push("Username is required");
  }
  if (!username.indexOf("[0-9]")) {
    alert("Numbers only")
  }
  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split('').filter(x => x === '@').length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf('.') === -1) {
    errors.push("Email should contain at least one dot");
  }
  // if (password.length, password_conf.length < 8) {
  //   errors.push("Password should be at least 8 characters long");
  // }

  // if (password.length < 8 != password_conf.length < 8) {
  //   errors.push("Passwords should match");
  // }

  return errors;
}


export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      home_state: '',
      email: '',
      username: '',
      password: '',
      password_conf: '',

      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('./Dashboard');


    const { first_name, last_name, home_state, email, username, password, password_conf } = this.state;

    const errors = validate(first_name, last_name, home_state, email, username, password, password_conf);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

  }


  onSubmit = (e) => {

    axios.post(`http://localhost:8080/api/post?first_name=${this.state.first_name}&last_name=${this.state.last_name}&home_state=${this.state.home_state}&email=${this.state.email}&username=${this.state.username}&password=${this.state.password}&password_conf=${this.state.password_conf}`)
      .then((Response) => {
        console.log(Response, "Registered successfully");

      });

  }

  render() {

    const { errors } = this.state;
    const { first_name, last_name, home_state, email, username, password, password_conf } = this.state;
    const isEnabled =
      first_name.length > 1 &&
      last_name.length > 1 &&
      home_state.length === 2 &&
      email.length > 5 &&
      email.length < 45 &&
      username.length > 7 &&
      password.length > 7 &&
      password_conf.length > 7 &&
      password == password_conf;


    // const localImage = './backgroundtest.png';
    // <BackgroundImage src={localImage}></BackgroundImage>

    return (

      <MuiThemeProvider >
        <Center>
          <div>
            <div style={{ fontWeight: "bold", color: "#0F86AC", fontSize: "30" }}>Register Here!</div>

            <form onSubmit={this.handleSubmit}>
              {errors.map(error => (
                <p key={error}>Error: {error}</p>
              ))}

              <TextField id='first_name'
                value={this.state.first_name}
                onChange={evt => this.setState({ first_name: evt.target.value })}
                type="text"
                title="A-Z a-z characters only"
                hintText="First Name"
                floatingLabelText='First Name'
                minLength='1'
                maxLength='45'
                floatingLabelFixed
                required
              //errorText="This field is required"           
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              //placeholder="First Name"             
              /><br />

              <TextField id='last_name'
                value={this.state.last_name}
                onChange={evt => this.setState({ last_name: evt.target.value })}
                type="text"
                title="A-Z a-z characters only"
                hintText='Last Name'
                floatingLabelText='Last Name'
                minLength='1'
                maxLength='45'
                floatingLabelFixed
                required
              //placeholder="Last Name"
              //pattern="[a-zA-Z]"              
              /><br />

              <TextField id="home_state"
                value={this.state.home_state}
                onChange={evt => this.setState({ home_state: evt.target.value })}
                type="text"
                title="2 state initials only ex.(UT Utah)"
                hintText='Home State Initials'
                floatingLabelText='Home State'
                minLength='2'
                maxLength='2'
                floatingLabelFixed
                required
              // placeholder="Home State Initials"
              //pattern="[A-Z]
              /><br />

              <TextField id='email'
                value={this.state.email}
                onChange={evt => this.setState({ email: evt.target.value })}
                type="email"
                title="Must contain @ and . ex. (mail@email.com)"
                hintText='Enter your email'
                floatingLabelText='Enter your email'
                minLength='5'
                floatingLabelFixed
                required
              //placeholder="Email"
              //hintStyle='dark'
              //pattern="[a-zA-Z@._-]"
              /><br />


              <TextField id='username'
                value={this.state.username}
                onChange={evt => this.setState({ username: evt.target.value })}
                type="text"
                title="Must contain A-Z a-z 0-9 _!$ only)"
                hintText='Username (8 - 16 Characters)'
                floatingLabelText='Enter an Username'
                minLength='8'
                maxLength='15'
                floatingLabelFixed
                required
              //pattern="[a-zA-Z0-9_!$]"  
              //placeholder="Username"
              /><br />

              <TextField id='password'
                value={this.state.password}
                onChange={evt => this.setState({ password: evt.target.value })}
                type="password"
                title="Must contain A-Z a-z 0-9 _!$"
                hintText='Please enter a Password '
                floatingLabelText='Please enter a Password'
                minLength='8'
                maxLength='15'
                floatingLabelFixed
                required
              //placeholder="Password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}"
              /><br />

              <TextField id='password_conf'
                value={this.state.password_conf}
                onChange={evt => this.setState({ password_conf: evt.target.value })}
                type="password"
                title="Must match previous Password"
                hintText='Re-enter previous Password'
                floatingLabelText='Re-enter prevuios Password'
                minLength='8'
                maxLength='15'
                floatingLabelFixed
                required
              //pattern="(?=.*\d)(?=.*[0-9]).{8,16}"
              //placeholder="Re-Enter your Password"
              /> <br />

              <button disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Register</button>

            </form>

          </div>
          {/* <div class="checkbox">

       <Label><Input type="checkbox"> Remember me</Input></Label>
   </div> */}
        </Center>
      </MuiThemeProvider >

    );
  }
}


