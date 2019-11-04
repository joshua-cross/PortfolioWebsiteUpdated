import React from 'react';
import "./style/secondaryProjects.css";
import {Link} from 'react-router-dom';

class SecondaryProjects extends React.Component {

    renderProjects = () => {
        return this.props.projects.map((project) => {
            return(
                <div class = "secondary-project">
                    <div className = "secondary-project-image">
                        <img src = {project.image} />
                    </div>
                    <h2>
                        {project.name}
                    </h2>
                    <p>
                        {project.description}
                    </p>

                    <div className = "read-more-holder">
                        <Link className = "read-more" to = {`/project/${project.id}`}>read more</Link>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className = "secondary-projects">
                <h1>Other Projects</h1>
                <div className = "secondary-project-holder">
                    {this.renderProjects()}
                </div>
            </div>
        )
    }
}

export default SecondaryProjects;