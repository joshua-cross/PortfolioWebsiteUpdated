import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'



import {login} from '../../actions';



import './style/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            usernameClass: "input-no-error",
            passwordClass: "input-no-error"
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("next props status: " + nextProps.status);
        if(nextProps.status === "access granted") {
            this.setState({
                usernameClass: 'input-no-error',
                passwordClass: 'input-no-error'
            })
        } else if(nextProps.status === "access denied") {
            this.setState({
                usernameClass: 'input-no-error',
                passwordClass: 'input-error'
            })
        } else if (nextProps.status === "invalid username") {
            this.setState({
                usernameClass: 'input-error',
                passwordClass: 'input-no-error'
            })
        }
    }

    componentDidUpdate() {
        console.log(this.props.status);
    }

    loginAccount = (event) => {
        this.props.login(this.state.username, this.state.password);
    }

    usernameChanged = (event) => {
        var username = event.target.value;
        this.setState({
            username: username
        })
    }

    passwordChanged = (event) => {
        var password = event.target.value;
        this.setState({
            password: password
        })
    }

    loginStatus = () => {
        //if the status is "access granted" then  the username and password are correct so take the user back
        //to the home page.
        if(this.props.status === "access granted") {
            return <Redirect to = "/"></Redirect>;
        //if the status is "access granted" then the password is incorrect.
        } else if(this.props.status === "access denied") {
            return (
                <div className = "error">
                    <p>Error! Password is incorrect</p>
                </div>
            )
        } else if (this.props.status === "invalid username") {
            return (
                <div className = "error">
                    <p>Error! Username is incorrect</p>
                </div>
            );
        }
        // return this.state.status;
    }

    render() {
        return (
            <div className = "login">
                {this.loginStatus()}
                <div className = {`form-label`}>
                    <label for = "username">Username</label>
                </div>
                <input 
                type = "text" 
                name = "username"
                value = {this.state.username}
                onChange = {this.usernameChanged}
                className = {this.state.usernameClass}
                />
                <div className = {`form-label`}>
                    <label for = "password">Password</label>
                </div>
                <input 
                type = "password" 
                name = "password" 
                value = {this.state.password}
                onChange = {this.passwordChanged}
                className = {this.state.passwordClass}
                />
                <div className = "form-button">
                    <button className = "submit" onClick={this.loginAccount}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ourProps) => {
    // console.log("login: " + state.login);
    console.log("login: " + state.login);
    return({
        status: state.login
    });
}

export default connect(mapStateToProps, {login: login})(Login);