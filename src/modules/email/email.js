import React from 'react';
import {connect} from 'react-redux';

import Name from '../addProjects/form/name';
import Textarea from '../addProjects/form/textarea';

import {email} from '../../actions';

import '../login/style/login.css';
class Email extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            subject: "",
            message: "",
            errors: []
        }
    }

    subjectChanged = (subject) => {
        this.setState({
            subject: subject
        })
    }

    messageChanged = (message) => {
        this.setState({
            message: message
        })
    }

    emailChanged = (email) => {
        this.setState({
            email: email
        })
    }

    sendEmail = () => {
        var errors = []

        if(this.state.email.trim() === "") {
            errors.push("Must enter an email address");
        }

        if(this.state.subject.trim() === "") {
            errors.push("Email must have a subject");
        }

        if(this.state.message.trim() === "") {
            errors.push("Email must have a message");
        }

        if(errors.length === 0) {
            this.props.email(this.state.email, this.state.subject, this.state.message);
        }

        this.setState({
            errors: errors
        })
    }

    renderErrors = () => {
        return this.state.errors.map((error) => {
            return <div className = "error"><p>{error}</p></div>
        })
    }

    render() {
        return (
            <div className = "login">
                <div className = "errors">
                    {this.renderErrors()}
                </div>
                <Name
                    nameChanged = {this.emailChanged}
                    label = "Email"
                />
                <Name
                    nameChanged = {this.subjectChanged}
                    label = "Subject"
                />
                <Textarea
                    labelText = "Message"
                    fieldChanged = {this.messageChanged}
                />
                <div className = "form-button">
                    <button className = "submit" onClick={this.sendEmail}>Send Email</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {email})(Email);
// export default Email;