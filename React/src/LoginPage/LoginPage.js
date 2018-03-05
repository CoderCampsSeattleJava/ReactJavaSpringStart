import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.css';



class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            username: event.target.username,
            password: event.target.password,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let reqBody = {
            username: this.state.username,
            password: this.state.password
        };
        fetch(`http://localhost:8080/login`, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json(), (err) => this.setState({...this.state, error: err}))
            .then((data) => {
                this.props.dispatch({ type: "USER_ID", payload: data.id });
                this.props.history.push("/Courses");
            })
            .catch((err) => console.log(err))
    }

render() {
    return (
        <header>
            <div className="body">
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="form-signin-heading">Please Login</h1>
                        <h3>{this.state.error}</h3>
                        <div className="form-group">
                            <input type="username" className="form-control" value={this.state.username} onChange={evt => this.setState({ username: evt.target.value })} placeholder="Enter username" />

                            <div className="form-group">
                                <input type="password" className="form-control" value={this.state.password} onChange={evt => this.setState({ password: evt.target.value })} placeholder="Password" />
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember Me
                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Login
                    </button>
                                <p className="mt-5 mb-3 text-muted">&copy; Coder Dudes University</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}
}



// const mapStateToProps = state => {
//     return {
//         userId: state.userId,
//     };
// };

const mapDispatchToProps = dispatch => {
    return { dispatch: dispatch }
};



export default connect(mapDispatchToProps)(LoginPage);