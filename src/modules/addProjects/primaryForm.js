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
            name: "",
            description: "",
            field: "",
            tech: [],
            desktopImage: null,
            mobileImage: null
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

    render() {
        return (
            <div className = "login">
                <p>Testing.</p>
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
                    type = "image"
                    fileChosen = {this.desktopImageChosen}
                />
                <Upload 
                    type = "image"
                    fileChosen = {this.mobileImageChosen}
                />
                <Upload 
                    type = "video"
                    fileChosen = {this.desktopImageChosen}
                />
            </div>
        )
    }
}

export default connect(null, {addPrimaryProject: addPrimaryProject})(PrimaryForm);