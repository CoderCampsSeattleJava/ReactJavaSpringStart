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
                onChange={( event, newValue ) => 
                this.setState({ username: newValue })}
                hintText='Enter your Username'
                floatingLabelText='Username' /><br />

             <TextField
                onChange={( event, newValue ) =>
                this.setState({ password: newValue })}
                hintText='Enter your Password' 
                floatingLabelText='Password' /><br />

            <RaisedButton label='Login' onClick={( event ) => this.handleClick( event )} />
            </div>    
        </Center>
    </MuiThemeProvider>
);






class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           username: ' ',
           password: ' '
        };
    }

    handleClick( event ) {
        let apiBaseUrl = "http://localhost:8080/api/";
        let self = this;
        let payload={
            email: this.state.username,
            password: this.state.password
        };

        axios.post( apiBaseUrl + 'Login', payload )
        .then( (Response) => { console.log( response );
        
            if ( Response.data.code === 200 ) {
                console.log( 'Login Successfull' );
                let uploadScreen=[];
                uploadScreen.push(<UploadScreen appContext={ self.props.appContext} />)
                self.props.appContext.setState({ LoginPage: [], uploadScreen: uploadScreen})
            
            } else if ( Response.data.code === 204 ) {
                console.log( 'Username password do not match' );
                alert( 'Username password do not match' );
            
            } else {
                console.log( 'Username does not exists' );
                alert( 'Username does not match' );
            }})

            .catch( (error) => {

            })
    }

    render() {
        return (
            <div>
                <TextInputs />
            </div>
        );
    };
};

export default LoginPage;