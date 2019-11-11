import React from 'react';
import {connect} from 'react-redux';

import {getSecondaryProjects} from '../../actions';
import "./style/secondaryProjects.css";
import {Link} from 'react-router-dom';

class SecondaryProjects extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSecondaryProjects();
    }

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

    renderSecondaryProjects = () => {
        if(this.props.secondaryProjects) {
            const url = "http://portfolio2.test/images/";
            return this.props.secondaryProjects.map((project) => {
                var printscreens = project.printscreens;
                printscreens = printscreens.replace(/['"]+/g,'');
                printscreens = printscreens.replace('[', '')
                printscreens = printscreens.replace(']', '')
                var images = printscreens.split(',');
                var imageURL = url + images[0];
                return(
                    <div class = "secondary-project">
                        <div className = "secondary-project-image">
                            <img src = {imageURL} />
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
    }

    render() {
        console.log("CABBAGE: ", this.props.secondaryProjects);
        return (
            <div className = "secondary-projects">
                <h1>Other Projects</h1>
                <div className = "secondary-project-holder">
                    {this.renderProjects()}
                    {this.renderSecondaryProjects()}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state, ourProps) => {
    return({
        secondaryProjects: state.secondaryProjects
    });
}

export default connect(mapStatetoProps, {getSecondaryProjects, getSecondaryProjects})(SecondaryProjects);