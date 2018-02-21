import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Center from 'react-center';




const TextInputs = ( props ) => (
    <MuiThemeProvider>
         <Center>
            <div>
            <TextField 
                type='text'
                hintText='Username' /><br />

            

            <TextField
                type='text'
                hintText='Password' /><br />

            <RaisedButton label='Login'  />
            </div>    
        </Center>
    </MuiThemeProvider>
);






class LoginPage extends Component {


    render() {
        return (
            <div>
                <TextInputs />
            </div>
        );
    };
};

export default LoginPage;