import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Center from 'react-center';
import backgroundtest from './images/backgroundtest.png';
import Zoom from 'react-reveal/Zoom';
import RaisedButton from 'material-ui/RaisedButton';
import { blueA100 } from 'material-ui/styles/colors';

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
  return errors;
}

export default class Register extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.history.push('./loginform');

    const { first_name, last_name, home_state, email, username, password, password_conf } = this.state;

    const errors = validate(first_name, last_name, home_state, email, username, password, password_conf);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  }

  onSubmit = (e) => {

    axios.post(`http://localhost:8080/api/post?first_name=${this.state.first_name}&last_name=${this.state.last_name}&home_state=${this.state.home_state}&email=${this.state.email}&username=${this.state.username}&password=${this.state.password}&password_conf=${this.state.password_conf}`)
      .then((response) => {
        console.log(response, "Saved here");
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
      password === password_conf;

    return (

      <MuiThemeProvider><header>
        <Center>
          <div>
            <div style={{ fontWeight: "bold", color: "white", fontSize: "xx-large" }}>Register Here!
            <Zoom><img src={backgroundtest} width={150} height={150} /></Zoom></div>

            <form onSubmit={this.handleSubmit}>
              {errors.map(error => (
                <p key={error}>Error: {error}</p>
              ))}

              <TextField id='first_name'
                value={this.state.first_name}
                onChange={evt => this.setState({ first_name: evt.target.value })}
                type="text"
                title="A-Z a-z characters only"
                hintText="Enter First Name"
                floatingLabelText='First Name'
                minLength='1'
                maxLength='45'
                required
              /><br />

              <TextField id='last_name'
                value={this.state.last_name}
                onChange={evt => this.setState({ last_name: evt.target.value })}
                type="text"
                title="A-Z a-z characters only"
                hintText='Enter Last Name'
                floatingLabelText='Last Name'
                minLength='1'
                maxLength='45'
                required
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
                required
              /><br />

              <TextField id='email'
                value={this.state.email}
                onChange={evt => this.setState({ email: evt.target.value })}
                type="email"
                title="Must contain @ and . ex. (mail@email.com)"
                hintText='Enter your email'
                floatingLabelText='Email'
                minLength='5'
                required
              /><br />

              <TextField id='username'
                value={this.state.username}
                onChange={evt => this.setState({ username: evt.target.value })}
                type="text"
                title="8 - 16 Characters"
                hintText='Username'
                floatingLabelText='Username'
                minLength='8'
                maxLength='15'
                required
              /><br />

              <TextField id='password'
                value={this.state.password}
                onChange={evt => this.setState({ password: evt.target.value })}
                type="password"
                title="8 to 16 characters"
                hintText='Please enter a Password'
                floatingLabelText='Password'
                minLength='8'
                maxLength='15'
                required
              /><br />

              <TextField id='password_conf'
                value={this.state.password_conf}
                onChange={evt => this.setState({ password_conf: evt.target.value })}
                type="password"
                title="Must match previous Password, 8 to 16 characters"
                hintText='Re-enter previous Password'
                minLength='8'
                maxLength='15'
                floatingLabelText='Re-enter PW'
                required
              /> <br />
              {/* <ImageUploader imgExtension={['.jpg', '.gif', '.png', '.gif']}
              /> */}
              <Zoom> <RaisedButton label="Register" fullWidth={true} labelColor={blueA100} type="submit" disabled={!isEnabled} onClick={e => this.onSubmit(e)} Register /> </Zoom>
            </form>
          </div>
        </Center>
      </header> </MuiThemeProvider>
    );
  }
}


