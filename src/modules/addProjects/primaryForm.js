import React from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import {addPrimaryProject, getProject, updateProject} from '../../actions';
import {isEmpty} from 'lodash';

import '../login/style/login.css';

import Name from './form/name';
import Textarea from './form/textarea';
import Tech from './form/tech';
import Upload from './form/upload';

class PrimaryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            name: "",
            description: "",
            role: "",
            tech: [],
            desktopImage: undefined,
            mobileImage: undefined,
            url: "",
            github: ""
        }
    }

    nameChanged = (name) => {
        this.setState({
            name: name
        });
    }

    urlChanged = (url) => {
        this.setState({
            url: url
        })
    }

    githubChanged = (github) => {
        // console.log(github);
        this.setState({
            github: github
        });
    }

    descriptionChanged = (description) => {
        this.setState({
            description: description
        });
    }

    roleChanged = (role) => {
        this.setState({
            role: role
        })
    };

    techChanged = (tech) => {
        this.setState({
            tech: tech
        })
    }
    
    desktopImageChosen = (image) => {
        this.setState({
            desktopImage: image
        })
    }

    mobileImageChosen = (image) => {
        this.setState({
            mobileImage: image
        });
    }

    componentDidMount = () => {
        if(this.props.id) {
            this.props.getProject(this.props.id);
        }
    }

    //creating a project based on the data from the form
    createProject = () => {
        var errors = [];
        if(this.state.name.trim() === "") {
            errors.push("Please enter a title");
        } 
        if (this.state.description.trim() === "") {
            errors.push("Please enter a description");
        } 
        if (this.state.role.trim() === "") {
            errors.push("Please enter a role.");
        } 
        if (this.state.tech.length === 0) {
            errors.push("Please select a minimum of 1 technology");
        } 
        if(!this.state.desktopImage && !this.state.mobileImage) {
            errors.push("Please upload either a desktop or mobile image (or both).");
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

        //if there are no errors then we can send the form to the back-end.
        if(errors.length === 0) {
            this.props.addPrimaryProject(this.state.name, this.state.description, this.state.role, 
                this.state.tech, this.state.desktopImage, this.state.mobileImage, this.state.url,
                this.state.github);
        }

        this.setState({
            errors: errors
        });
    }
    
    editProject = () => {
        var errors = [];
        //if there were values before, but there are now none, then inform the user to enter values.
        if(this.state.name.trim() === "" && this.props.primaryProject.name) {
            errors.push("Please enter a title");
        } 
        if (this.state.description.trim() === "" && this.props.primaryProject.description) {
            errors.push("Please enter a description");
        } 
        if (this.state.role.trim() === "" && this.props.primaryProject.role) {
            errors.push("Please enter a role.");
        } 
        if (this.state.tech.length === 0 && this.props.primaryProject.tech) {
            errors.push("Please select a minimum of 1 technology");
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

        this.setState({
            errors: errors
        });

        var desktopImage = this.state.desktopImage;
        var mobileImage = this.state.mobileImage;

        //if the mobile image in the state, and from the database are the same, do not update them
        if(!desktopImage) {
            desktopImage = undefined;
        }

        if(!mobileImage) {
            mobileImage = undefined;
        }

        if(errors.length === 0) {
            this.props.updateProject(this.props.id, this.state.name, this.state.description, this.state.role,
                this.state.tech, this.state.desktopImage, this.state.mobileImage, this.state.url, this.state.github);
        }
    }

    //rendering the errors from this form.
    renderErrors = () => {
        return this.state.errors.map((error) => {
            return <div className = "error"><p>{error}</p></div>
        })
    }

    render() {
        if(this.props.id && this.props.primaryProject.name) {
            var primaryProject = this.props.primaryProject;
            console.log("primaryProject", primaryProject)
            var name = primaryProject.name;
            var description = primaryProject.description;
            var role = primaryProject.role;
            var tech = primaryProject.tech;
            var tech = primaryProject.tech.split('"').join('');
            tech = tech.split(',');
            //the url the images are stored in.
            const url = "http://portfolio2.test/images/";
            //getting the url for the images
            var desktopImage = url + primaryProject.desktopImage;
            var mobileImage = url + primaryProject.mobileImage;
            var theURL = primaryProject.url;
            var github = primaryProject.github;
            // console.log("props", this.props.id);
            return (
                <div className = "login">
                    {/* <p>{this.props.id}</p> */}
                    <div className = "errors">
                        {this.renderErrors()}
                    </div>
                    <Name
                        nameChanged = {this.nameChanged}
                        value = {name}
                    />
                    <Textarea
                        labelText = "Project Description"
                        fieldChanged = {this.descriptionChanged}
                        value = {description}
                    />
                    <Textarea
                        labelText = "Role"
                        fieldChanged = {this.roleChanged}
                        value = {role}
                    />
                    <Tech 
                        techChanged = {this.techChanged}
                        value = {tech}
                    />
                    <Upload 
                        label = "Desktop Image"
                        type = "image"
                        fileChosen = {this.desktopImageChosen}
                        value = {desktopImage}
                    />
                    <Upload 
                        label = "Mobile Image"
                        type = "image"
                        fileChosen = {this.mobileImageChosen}
                        value = {mobileImage}
                    />
                    <Name
                        nameChanged = {this.urlChanged}
                        label = "Project URL"
                        value = {theURL}
                    />
                    <Name
                        nameChanged = {this.githubChanged}
                        label = "Project GitHub"
                        value = {github}
                    />
                    {/* <Upload 
                        type = "video"
                        fileChosen = {this.desktopImageChosen}
                    /> */}

                    <div className = "form-button">
                        <button className = "submit" onClick={this.editProject}>Edit Project</button>
                    </div>
                </div>
            )
        } else if (!this.props.id) {
            // console.log("props", this.props.id);
            return (
                <div className = "login">
                    {/* <p>{this.props.id}</p> */}
                    <div className = "errors">
                        {this.renderErrors()}
                    </div>
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
                    <Tech 
                        techChanged = {this.techChanged}
                    />
                    <Upload 
                        label = "Desktop Image"
                        type = "image"
                        fileChosen = {this.desktopImageChosen}
                    />
                    <Upload 
                        label = "Mobile Image"
                        type = "image"
                        fileChosen = {this.mobileImageChosen}
                    />
                    <Name
                        nameChanged = {this.urlChanged}
                        label = "Project URL"
                    />
                    <Name
                        nameChanged = {this.githubChanged}
                        label = "Project GitHub"
                    />
                    {/* <Upload 
                        type = "video"
                        fileChosen = {this.desktopImageChosen}
                    /> */}

                    <div className = "form-button">
                        <button className = "submit" onClick={this.createProject}>Create Project</button>
                    </div>
                </div>
            )
        } else {
            return "Loading..."
        }
    }
}

const mapStateToProps = (state, ourProps) => {
    return({
        primaryProject: state.primaryProject
    })
}

export default connect(mapStateToProps, {
    addPrimaryProject: addPrimaryProject,
    getProject: getProject,
    updateProject: updateProject,
})(PrimaryForm);