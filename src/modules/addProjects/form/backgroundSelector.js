import React from 'react';
import Upload from './upload';
import ReactToggle from 'react-toggle';

import "react-toggle/style.css";

class BackgroundSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "image",
            file: undefined
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    fileChanged = (file) => {
        this.setState({
            file: file
        })

        this.props.backgroundChanged(file, this.state.type);
    }

    typeChanged = (e) => {
        var type = e.target.checked;
        console.log("type: " + type);
        if(type === false) {
            this.setState({
                type: "image"
            })
        } else {
            this.setState({
                type: "video"
            })
        }
    }

    renderUpload = () => {
        if(this.state.type === "image") {
            return (
                <Upload 
                label = "Background Image"
                type = "image"
                fileChosen = {this.fileChanged}
                active = "active"
                />
            )
        } else {
            return (
                <Upload 
                label = "Background Video"
                type = "video"
                fileChosen = {this.fileChanged}
                active = "active"
                />
            )
        }
    }

    render() {
        return(
            <div className = "printscreens">
                <h2>Select a video or an image for background</h2>
                <div className = "toggle-holder">image<ReactToggle className = "toggle" onChange = {this.typeChanged}></ReactToggle>Video</div>
                {this.renderUpload()}
            </div>
        )
    }
}

export default BackgroundSelector;