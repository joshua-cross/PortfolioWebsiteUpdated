import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Devices from './devices';

import "./style/projects.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import './style/device/devices.css'

import {getProjects, deletePrimaryProject} from '../../actions';

// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon, InlineIcon } from '@iconify/react';

import reduxIcon from '@iconify/icons-simple-icons/redux';
import javaIcon from '@iconify/icons-simple-icons/java';
import gitlabIcon from '@iconify/icons-simple-icons/gitlab';
import githubIcon from '@iconify/icons-simple-icons/github';
import mysqlIcon from '@iconify/icons-simple-icons/mysql';
import mongoDBIcon from '@iconify/icons-simple-icons/mongodb';
import androidStudio from '@iconify/icons-mdi/android-studio';
// import cSharp from '@iconify/icons-logos/c-sharp';

// npm install --save-dev @iconify/react @iconify/icons-logos

// npm install --save-dev @iconify/react @iconify/icons-logos



class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirecting: false,
            idToEdit: -1
        }
    }

    componentDidMount = () => {
        this.props.getProjects();
    }

    componentDidUpdate = () => {

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
                } else if (tech === "java") {
                    return <Icon color = "#A45412" className = "icon" icon = {javaIcon}/>
                } else if (tech === "android") {
                    return <Icon color = "#A45412" className = "icon" icon = {androidStudio}/>
                } else if (tech === "gitlab") {
                    return <Icon color = "#A45412" className = "icon" icon = {gitlabIcon}/>
                } else if (tech === "github") {
                    return <Icon color = "#A45412" className = "icon" icon = {githubIcon}/>
                } else if (tech === "mysql") {
                    return <Icon color = "#A45412" className = "icon" icon = {mysqlIcon}/>
                } else if (tech === "mongodb") {
                    return <Icon color = "#A45412" className = "icon" icon = {mongoDBIcon}/>
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
        // console.log("deleting" + id);
        this.props.deletePrimaryProject(id);
        this.props.getProjects();
    }

    //when the edit button is clicked, the app should redirect to an edit page.
    editButtin = (id) => {
        console.log("editing" + id);
        this.setState({
            redirecting: true,
            idToEdit: id
        });
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
        const url = "https://josh-cross.com/portfolio2/images/";
        return this.props.primaryProjects.map((project) => {
            //getting the url for the images if they exist.
            if(project.mobileImage === "null" || project.mobileImage === null) {
                var mobileImage = undefined;
            } else {
                var mobileImage = url + project.mobileImage;
            }

            if(project.desktopImage === "null" || project.desktopImage === null) {
                var desktopImage = undefined
            } else {
                var desktopImage = url + project.desktopImage;
                console.log("desktop image: " + desktopImage);
            }

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
                    {this.renderProjectButtons(project)} 
                </div>
            )
        })
    }

    //rendering the gitHub and the Website buttons if they exist.
    renderProjectButtons = (project) => {
        var buttons = [];
        if(project.url) {
            buttons.push(
            <a href = {`${project.url}`}>
                <button className = "project-button website-button">View Website</button>
            </a>
            );
        }

        if(project.github) {
            buttons.push(
                <a href = {`${project.github}`}>
                    <button className = "project-button github-button">View GitHub</button>
                </a>
            )
        }

        return <div className = "buttonHolder">{buttons}</div>;
    }

    //redirecting the user to the edit page if the edit button was clicked.
    redirect = () => {
        if(this.state.redirecting === true) {
            return (
                <Redirect to = {`/editprimary/${this.state.idToEdit}`}/>
            )
        }
    }
    

    render() {
        return (
            <div className = "projects">
                {this.redirect()}
                {/* {this.renderProjects()} */}
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

export default connect(mapStateToProps, {
    getProjects: getProjects,
    deletePrimaryProject: deletePrimaryProject
})(Projects);