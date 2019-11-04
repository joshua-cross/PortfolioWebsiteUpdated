import React from 'react';
import {Link} from 'react-router-dom';

import './style/login.css';

class Login extends React.Component {
    render() {
        return (
            <div className = "login">
                <div className = "form-label">
                    <label for = "username">Username</label>
                </div>
                <input type = "text" name = "username"></input>
                <div className = "form-label">
                    <label for = "password">Password</label>
                </div>
                <input type = "password" name = "password"></input>
                <div className = "form-button">
                    <button className = "submit">Login</button>
                </div>
            </div>
        )
    }
}

export default Login;