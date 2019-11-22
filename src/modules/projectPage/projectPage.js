import React from 'react';
import {connect} from 'react-redux';

import {getSecondaryProject} from '../../actions';

import './style/projectPage.css';

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getSecondaryProject(this.props.id);
    }

    renderBackground = () => {
        const backgroundType = this.props.secondaryProject.backgroundType;
        const title = (
            <div className = "title-holder">
                <div className = "title">
                    <h1>{this.props.secondaryProject.name}</h1>
                </div>
                <div className = "scroll-button">
                    <a href = "#contents"><button>&darr;</button></a>
                </div>
            </div>
        )
        if(backgroundType === "video") {
            const url = "https://josh-cross.com/portfolio2/videos/" + this.props.secondaryProject.background;
            return(
                <div className = "background">
                    {title}
                    <div className = "video-holder">
                        <video muted autoPlay loop>
                            <source src = {url}></source>
                        </video>
                    </div>
                </div>
            )
        } else {
            const url = "https://josh-cross.com/portfolio2/images/" + this.props.secondaryProject.background;
            return(
                <div className = "background">
                    {title}
                    <img src = {url}></img>
                </div>
            )
        }
    }

    renderImages = () => {
        var printscreens = this.props.secondaryProject.printscreens;
        printscreens = printscreens.replace(/['"]+/g,'');
        printscreens = printscreens.replace('[', '')
        printscreens = printscreens.replace(']', '')
        var images = printscreens.split(',');
        const url = "https://josh-cross.com/portfolio2/images/";
        return images.map((image) => {
            const imageURL = url + image;
            return(
                <div className = "secondary-image">
                    <img src = {imageURL}></img>
                </div>
            )
        })
    }

    renderButtons = () => {
        if(this.props.secondaryProject.gitlab || this.props.secondaryProject.url) {
            if(this.props.secondaryProject.url) {
                var urlButton = <a href = {this.props.secondaryProject.url} className = "project-button website-button">View Website</a>
            }
            if(this.props.secondaryProject.gitlab) {
                var githubButton = <a href = {this.props.secondaryProject.github} className = "project-button github-button">View GitHub</a>
            }
            return <div className = "button-holder">{urlButton}{githubButton}</div> 
        } 
    }

    render() {
        if(this.props.secondaryProject.name) {
            return(
                <div>
                    {this.renderBackground()}
                    <div id = "contents" className = "secondary-content">
                        <div className = "description">
                            <h2>Description</h2>
                            <p>{this.props.secondaryProject.description}</p>
                        </div>
                        <div className = "role">
                            <h2>Role</h2>
                            <p>{this.props.secondaryProject.role}</p>
                        </div>
                        <div className = "images">
                            <h2>Images</h2>
                            <div className = "image-holder">
                                {this.renderImages()}
                            </div>
                        </div>
                        {this.renderButtons()}
                    </div>
                </div>
            )
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}

const mapStateToProps = (state, ourProps) => {
    return({
        secondaryProject: state.secondaryProject
    })
}

ProjectPage.defaultProps = {
    id: 1
}

export default connect(mapStateToProps, {getSecondaryProject})(ProjectPage);