import React from 'react';
import {connect} from 'react-redux';
import {addSecondaryProject} from '../../actions';

import Name from './form/name';
import Textarea from './form/textarea';
import ProjectImages from './form/projectImages';

import '../login/style/login.css';

class SecondaryProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            role: '',
            files: []
        }
    }

    imagesChanged = (files) => {
        this.setState({
            files: files
        })
    }

    render() {
        return(
            <div className = "login">
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
                <ProjectImages />
            </div>
        )
    }
}

export default connect(null, {addSecondaryProject})(SecondaryProject);