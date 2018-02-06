import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    state = {
        // firstName: '',
        // lastName: '',
        // homeState: '',
        username: '',
        // email: '',
        password: '',
        passwordConf:'',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    onSubmit = (e) => {
        //prevent the page auto-refresh
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <div style={{ fontWeight: "bold", color: "green" }}> Register Here!</div>

                <form>
                    {/* <input
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={this.state.firstName}
                        onChange={e => this.change(e)} /><br />

                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={e => this.change(e)} /><br />

                    <input
                        name="homeState"
                        placeholder="Home State"
                        value={this.state.homeState}
                        onChange={e => this.change(e)} /><br /> 

                <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={e => this.change(e)} /><br />

                    <input
                        name="email"
                        placeholder="Email"
                        required
                        value={this.state.email}
                        onChange={e => this.change(e)} />
                    <br /> */}

                    <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={e => this.change(e)} /><br />

                    <input
                        name="password"
                        //so it is hidden
                        // type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.change(e)} /><br />

                    <input
                        name="passwordConf"
                        //so it is hidden
                        // type="password"
                        placeholder="Re-Enter Password"
                        value={this.state.passwordConf}
                        onChange={e => this.change(e)} /><br />


                    <button onClick={e => this.onSubmit(e)}>Register</button>
                </form>
            </div>
        );
    }
} 
