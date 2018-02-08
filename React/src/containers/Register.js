import React from 'react';
import axios from 'axios';


export default class Register extends React.Component {
  // constructor() {
  //   super();

  state = {

    first_name: '',
    last_name: '',
    home_state: '',
    email: '',
    emailError: '',
    username: '',
    password: '',
    passwordError: '',
    password_conf: '',
    password_confError: '',
  };


  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  };

  checkForErrors = () => {
    let isError = false;
    const errors = {
      emailError: '',
      passwordError: '',
      password_confError: '',

    };

    this.setState({
      ...this.setState,
      ...errors
    });

    return isError;
  }

  onSubmit = (e) => {
    //prevent auto-refresh
   // e.preventDefault();


    const err = this.checkForErrors();
    if (!err) {
      //clear form
      this.setState({
        first_name: '',
        last_name: '',
        home_state: '',
        email: '',
        emailError: '',
        username: '',
        password: '',
        passwordError: '',
        password_conf: '',
        password_confError: '',
      });
    }



    axios.post(`http://localhost:8080/api/post?first_name=${this.state.first_name}&last_name=${this.state.last_name}&home_state=${this.state.home_state}&email=${this.state.email}&username=${this.state.username}&password=${this.state.password}&password_conf=${this.state.password_conf}`)
      .then((Response) => {
        console.log(Response, "Registered successfully");


      });   //access the results here....

  }

  render() {
    return (
      <div>
        <div style={{ fontWeight: "bold", color: "green" }}>Register Here!</div>

        <form>

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.props.first_name}
            onChange={e => this.onChange(e)}
            minLength='1'
            maxLength='45'
            required /><br />

          <input
            name="last_name"
            placeholder="Last Name"
            value={this.props.last_name}
            onChange={e => this.onChange(e)}
            minLength='1'
            maxLength='45'
            required  /><br />

          <input
            name="home_state"
            placeholder="Home State Initials"
            value={this.props.home_state}
            onChange={e => this.onChange(e)}
            minLength='2'
            maxLength='2'
            required  /><br />

          <input
            name="email"
            placeholder="Enter Email"
            value={this.props.email}
            onChange={e => this.onChange(e)}
            type='email'
            minLength='5'
            required  /><br />

          <input
            name="username"
            placeholder="Select an Username"
            value={this.props.username}
            onChange={e => this.onChange(e)}
            minLength='8'
            maxLength='16'
            required  /><br />

          <input
            name="password"
            //so it is hidden
            type="password"
            placeholder="Enter Password"
            value={this.props.password}
            onChange={e => this.onChange(e)}
            minLength='8'
            maxLength='16'
            required  /><br />

          <input
            name="password_conf"
            //so it is hidden
            type="password"
            placeholder="Re-Enter Password"
            value={this.props.password_conf}
            onChange={e => this.onChange(e)}
            minLength='8'
            maxLength='16'
            required  /><br />

          <button type="button" onClick={e => this.onSubmit(e)}>Register</button>
        </form>
      </div>
    );
  }
}

