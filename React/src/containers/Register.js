import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
  constructor(){
    super();

this.state = {

    name: '',
    email: '',
  };
}
  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  

  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    // const { name, email } = this.state;

    axios.post(`http://localhost:8080/api/post?name=${this.state.name}&email=${this.state.email}`)
    .then((Response) => {
      console.log(Response, "hola");


    }) ;   //access the results here....
      
  }

  render() {
    return (
      <div>
        <div style={{ fontWeight: "bold", color: "green" }}> Register Here!</div>

        <form>
        

          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.onChange(e)} /><br />

          <input
            name="email"
            //so it is hidden
            // type="password"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.onChange(e)} /><br />


          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

