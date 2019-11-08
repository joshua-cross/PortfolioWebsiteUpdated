import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Devices from './devices';

import "./style/projects.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import './style/device/devices.css'

import {getProjects} from '../../actions';

// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';

// npm install --save-dev @iconify/react @iconify/icons-logos



class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProjects();
    }

    componentDidUpdate() {

    }

    renderTechnologies = (technologies) => {
        if(technologies) {
            return technologies.map((tech) => {
                var className = "";
                if(tech === "html") {
                    return <i className = "fab fa-html5"/>
                } else if (tech === "css") {
                    return <i className = "fab fa-css3-alt"/>
                } else if (tech === "javascript") {
                    return <i className = "fab fa-js-square"/>
                } else if (tech === "sass") {
                    return <i className = "fab fa-sass"/>
                } else if (tech === "react") {
                    return <i className = "fab fa-react" />
                } else if (tech === "redux") {
                    return <Icon color = "#A45412" className = "icon" icon={reduxIcon} />
                } else if (tech === "php") {
                    return <i className = "fab fa-php"/>
                } else if (tech === "node") {
                    return <i className = "fab fa-node"/>
                } else if (tech === "laravel") {
                    return <i className = "fab fa-laravel"/>
                }
                return(
                    <i className = {className}></i>
                );
            })
        } else {
            return (
                <p>No tech found...</p>
            )
        }
    }

    renderProjects = () => {
        return this.props.projects.map((project) => {
            return(
                <div className = "project">
                    <h1>{project.name}</h1>
                    <div className = "technologies">{this.renderTechnologies(project.technologies)}</div>
                    <div className = "contents">
                        <div class = "text">
                            <h2>Description</h2>
                            <p>{project.description}</p>
                            <h2>Role</h2>
                            <p>{project.role}</p>
                        </div>
                    
                        <Devices
                            desktopImage = {project.desktopImage}
                            mobileImage = {project.mobileImage}
                        />
                           
                    </div>
                    <div>
                        <button className = "project-button website-button">View Website</button>
                        <button className = "project-button github-button">View GitHub</button>
                    </div>  
                </div>
            )
        });
    }

    deleteProject = (id) => {
        console.log("deleting" + id);
    }

    editButtin = (id) => {
        console.log("editing" + id);
    }

    //render an edit and delete button if the user is signed in.
    renderAdminButtons = (id) => {
        //if we are signed in.
        if(this.props.status === "access granted") {
            return(
                <div>
                    <button
                    className = "adminButton"
                    onClick = {() => {this.deleteProject(id)}}
                    >
                        Delete Project
                    </button>

                    <button
                    className = "adminButton"
                    onClick = {() => this.editButtin(id)}
                    >
                        Edit Item
                    </button>
                </div>
            )
        }
    }

    //rendering the projects that we retrieved from the API.
    renderPrimaryProjects = () => {
        //the main URL (change when deploying.)
        const url = "http://portfolio2.test/images/";
        return this.props.primaryProjects.map((project) => {
            //getting the url for the images
            var desktopImage = url + project.desktopImage;
            var mobileImage = url + project.mobileImage;

           //converting the tech string (seperated with commas) from the database to an array. 
            // var tech = project.tech.replace('\"', '');
            var tech = project.tech.split('"').join('');
            console.log("before: " + project.tech + " after: " + tech);
            tech = tech.split(',');
            console.log("tech: ", tech);

            return (
                <div className = "project">
                    {this.renderAdminButtons(project.id)}
                    <h1>{project.name}</h1>
                    <div className = "technologies">{this.renderTechnologies(tech)}</div>
                    <div className = "contents">
                        <div class = "text">
                            <h2>Description</h2>
                            <p>{project.description}</p>
                            <h2>Role</h2>
                            <p>{project.role}</p>
                        </div>
                    
                        <Devices
                            desktopImage = {desktopImage}
                            mobileImage = {mobileImage}
                        />
                           
                    </div>
                    <div>
                        <button className = "project-button website-button">View Website</button>
                        <button className = "project-button github-button">View GitHub</button>
                    </div>  
                </div>
            )
        })
    }
    

    render() {
        return (
            <div className = "projects">
                {this.renderProjects()}
                {this.renderPrimaryProjects()}
            </div>
        );
    }
}

const mapStateToProps = (state, ourProps) => {
    return({
        status: state.login,
        primaryProjects: state.primaryProjects
    });
}

export default connect(mapStateToProps, {getProjects: getProjects})(Projects);