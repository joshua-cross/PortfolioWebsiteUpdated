import React from 'react';
import {connect} from 'react-redux';
import {addPrimaryProject} from '../../actions';

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
            field: "",
            tech: [],
            desktopImage: undefined,
            mobileImage: undefined
        }
    }

    nameChanged = (name) => {
        this.setState({
            name: name
        });
    }

    descriptionChanged = (description) => {
        this.setState({
            description: description
        });
    }

    roleChanged = (field) => {
        this.setState({
            field: field
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

    //creating a project based on the data from the form
    createProject = () => {
        var errors = [];
        if(this.state.name.trim() === "") {
            errors.push("Please enter a title");
        } 
        if (this.state.description.trim() === "") {
            errors.push("Please enter a description");
        } 
        if (this.state.field.trim() === "") {
            errors.push("Please enter a role.");
        } 
        if (this.state.tech.length === 0) {
            errors.push("Please select a minimum of 1 technology");
        } 
        if(!this.state.desktopImage && !this.state.mobileImage) {
            errors.push("Please upload either a desktop or mobile image (or both)");
        }

        //if there are no errors then we can send the form to the back-end.
        if(errors.length === 0) {
            this.props.addPrimaryProject(this.state.name, this.state.description, this.state.state, 
                this.state.tech, this.state.desktopImage, this.state.mobileImage);
        }

        this.setState({
            errors: errors
        });
    }

    //rendering the errors from this form.
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
                    nameChanged = {this.nameChanged}
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
                {/* <Upload 
                    type = "video"
                    fileChosen = {this.desktopImageChosen}
                /> */}

                <div className = "form-button">
                    <button className = "submit" onClick={this.createProject}>Create Project</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {addPrimaryProject: addPrimaryProject})(PrimaryForm);