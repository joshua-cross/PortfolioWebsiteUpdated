import React from 'react';
import {connect} from 'react-redux';
import {addSecondaryProject} from '../../actions';
import validator from 'validator';

import Name from './form/name';
import Textarea from './form/textarea';
import ProjectImages from './form/projectImages';
import BackgroundSelector from './form/backgroundSelector';

import '../login/style/login.css';
import { thisExpression } from '@babel/types';

class SecondaryProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            name: '',
            description: '',
            role: '',
            files: [],
            background: undefined,
            backgroundType: "",
            url: "",
            github: ""
        }
    }

    nameChanged = (name) => {
        this.setState({
            name: name
        })
    }

    descriptionChanged = (description) => {
        this.setState({
            description: description
        })
    }

    roleChanged = (role) => {
        this.setState({
            role: role
        })
    }

    imagesChanged = (files) => {
        this.setState({
            files: files
        })
    }

    backgroundChanged = (background, type) => {
        this.setState({
            background: background,
            backgroundType: type
        })
    };

        
    urlChanged = (url) => {
        this.setState({
            url: url
        })
    }

    githubChanged = (github) => {
        this.setState({
            github: github
        })
    }

    createProject = () => {
        console.log("state: ", this.state);
        var errors = []
        if(this.state.name.trim() === "") {
            errors.push("Please enter a title");
        } 
        if (this.state.description.trim() === "") {
            errors.push("Please enter a description");
        } 
        if (this.state.role.trim() === "") {
            errors.push("Please enter a role.");
        } 
        if(this.state.files.length === 0) {
            errors.push("A project must have at least 1 printscreen")
        }
        if(!this.state.background) {
            errors.push("Please upload a background image or video");
        }
        if(this.state.url !== "" && !validator.isURL(this.state.url)) {
            errors.push("The Project URL field must contain a URL.");
        }
        if(this.state.github !== "" && !validator.isURL(this.state.github)) {
            errors.push("The Project GitHub field must contain a GitHub URL.");
        } else {
            if(this.state.github !== "" && !this.state.github.toLowerCase().includes("github")) {
                errors.push("The Project GitHub field must contain a GitHub URL.");
            }
        }

        if(errors.length === 0) {
            //upload
            this.props.addSecondaryProject(this.state.name, this.state.description, this.state.role,
                this.state.files, this.state.background, this.state.backgroundType, this.state.url,
                this.state.github);
        } else {
            this.setState({
                errors: errors
            })
        }
    }

    renderErrors = () => {
        return this.state.errors.map((error) => {
            return <div className = "error"><p>{error}</p></div>
        })
    }

    render() {
        return(
            <div className = "login">
                {this.renderErrors()}
                <Name
                    nameChanged = {this.nameChanged}
                    label = "Project Name"
                />
                <Textarea
                    labelText = "Project Description"
                    fieldChanged = {this.descriptionChanged}
                />
                <Textarea
                    labelText = "Role"
                    fieldChanged = {this.roleChanged}
                />
                <ProjectImages 
                    printscreensChanged = {this.imagesChanged}
                />
                <BackgroundSelector
                    backgroundChanged = {this.backgroundChanged}
                />
                <Name
                    nameChanged = {this.urlChanged}
                    label = "Project URL"
                />
                <Name
                    nameChanged = {this.githubChanged}
                    label = "Project GitHub"
                />
                <div className = "form-button">
                    <button className = "submit" onClick={this.createProject}>Create Project</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {addSecondaryProject})(SecondaryProject);