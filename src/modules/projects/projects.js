import React from 'react';

import "./style/projects.css";

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    renderProjects = () => {
        return this.props.projects.map((project) => {
            return(
                <div className = "project">
                    <h1>{project.name}</h1>
                    <h2>Description</h2>
                    <p>{project.description}</p>
                    <h2>Role</h2>
                    <p>{project.role}</p>
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