import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

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
    //e.preventDefault();

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

    return (
      <div>
        <div style={{ fontWeight: "bold", color: "green" }}>Register Here!</div>

        <form onSubmit={this.handleSubmit}>
          {errors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}

          <input
            value={this.state.first_name}
            onChange={evt => this.setState({ first_name: evt.target.value })}
            type="text"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A-Z a-z characters only"
            placeholder="First Name"
            minLength='1'
            maxLength='45'
            required
          /><br />

          <input
            value={this.state.last_name}
            onChange={evt => this.setState({ last_name: evt.target.value })}
            type="text"
            //pattern="[a-zA-Z]"
            title="A-Z a-z characters only"
            placeholder="Last Name"
            minLength='1'
            maxLength='45'
            required
          /><br />

          <input
            value={this.state.home_state}
            onChange={evt => this.setState({ home_state: evt.target.value })}
            type="text"
            placeholder="Home State Initials"
            //pattern="[A-Z]"
            title="2 state initials only ex.(UT Utah)"
            minLength='2'
            maxLength='2'
            required
          /><br />

          <input
            value={this.state.email}
            onChange={evt => this.setState({ email: evt.target.value })}
            type="email"
            placeholder="Email"
            type='email'
            //pattern="[a-zA-Z@._-]"
            title="Must contain @ and . ex. (mail@email.com)"
            minLength='5'
            required
          /><br />

          <input ref='text'
            value={this.state.username}
            onChange={evt => this.setState({ username: evt.target.value })}
            type="text"
            //pattern="[a-zA-Z0-9_!$]"
            title="Must contain A-Z a-z 0-9 _!$ only)"
            placeholder="Username"
            minLength='8'
            maxLength='15'
            required
          /><br />

          <input
            value={this.state.password}
            onChange={evt => this.setState({ password: evt.target.value })}
            type="password"
            //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}"
            title="Must contain A-Z a-z 0-9 _!$"
            placeholder="Password"
            minLength='8'
            maxLength='16'
            required
          /><br />

          <input
            value={this.state.password_conf}
            onChange={evt => this.setState({ password_conf: evt.target.value })}
            type="password"
            //pattern="(?=.*\d)(?=.*[0-9]).{8,16}"
            title="Must match previous password A-Z a-z 0-9 _!$"
            placeholder="Re-Enter your Password"
            minLength='8'
            maxLength='16'
            required
          /> <br />

          <button disabled={!isEnabled} onClick={e => this.onSubmit(e)}>Register</button>
        </form>
      </div>
    );
  }
}

