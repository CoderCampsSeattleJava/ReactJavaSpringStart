import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import  axios from 'axios';

const username = ' ';
const password = ' ';

const TextInputs = ( props ) => (
    <MuiThemeProvider>
      
            <div>
            <TextField 
                onChange={this.handleChang}
                hintText='Enter your Username'
                floatingLabelText='Username' /><br />

             <TextField
                onChange={this.handleChang}
                hintText='Enter your Password' 
                floatingLabelText='Password' /><br />

            <RaisedButton label='Login' onClick={this.handleClick}/>
            </div>    
   
    </MuiThemeProvider>
);






class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           Value: username, password,
        };
    }

    handleChange = ( event ) => {
        this.setState({ Value: event.target.value });
    }

    handleClick( event ) {
        let apiBaseUrl = "http://localhost:8080/api/";
        let self = this;
        let payload={
            username: this.state.username,
            password: this.state.password
        };

        axios.post( apiBaseUrl + 'Login', payload )
        .then( (response) => { console.log( response );
        
            if ( Response.data.code === 200 ) {
                console.log( 'Login Successfull' );
                let uploadScreen=[];
                uploadScreen.push(<uploadScreen appContext={ self.props.appContext} />)
                self.props.appContext.setState({ LoginPage: [], uploadScreen: uploadScreen})
            
            } else if ( Response.data.code === 204 ) {
                console.log( 'Username password do not match' );
                alert( 'Username password do not match' );
            
            } else {
                console.log( 'Username does not exists' );
                alert( 'Username does not match' );
            }})

            .catch( (error) => {
                console.log( error );
            });
    };

    render() {
        return (
            <div>
                <TextInputs />
            </div>
        );
    };
};

export default LoginPage;