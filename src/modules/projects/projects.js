import React from 'react';

import Devices from './devices';

import "./style/projects.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import './style/device/devices.css'

// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';

// npm install --save-dev @iconify/react @iconify/icons-logos



class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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
    

    render() {
        return (
            <div className = "projects">
                {this.renderProjects()}
            </div>
        );
    }
}

export default Projects;