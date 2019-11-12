import React from 'react';
import Upload from './upload';
import ReactToggle from 'react-toggle';

import "react-toggle/style.css";

class BackgroundSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "image",
            file: undefined,
            backgroundType: false,
            value: undefined
        }
    }

    componentDidMount() {
        if(this.props.backgroundType) {
            if(this.props.backgroundType === "video") {
                this.setState({
                    backgroundType: true,
                    type: this.props.backgroundType
                })
            } else {
                this.setState({
                    type: this.props.backgroundType,
                    backgroundType: false
                })
            }
        }

        if(this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.value) {
            this.setState({
                value: nextProps.value
            })
        }
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

        this.setState({
            backgroundType: !this.state.backgroundType
        })
    }

    renderUpload = () => {
        const imageURL = "http://portfolio2.test/images/";
        const videoURL = "http://portfolio2.test/videos/"
        if(this.state.type === "image") {
            if(this.state.value) {
                return (
                    <Upload
                    label = "Background Image"
                    type = "image"
                    fileChosen = {this.fileChanged}
                    active = "active"
                    value = {imageURL + this.state.value}
                    />
                )
            } else {
                return (
                    <Upload 
                    label = "Background Image"
                    type = "image"
                    fileChosen = {this.fileChanged}
                    active = "active"
                    />
                )
            }
        } else {
            if(this.state.value) {
                return (
                    <Upload 
                    label = "Background Video"
                    type = "video"
                    fileChosen = {this.fileChanged}
                    active = "active"
                    value = {videoURL + this.state.value}
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
    }

    render() {
        return(
            <div className = "printscreens">
                <h2>Select a video or an image for background</h2>
                <div className = "toggle-holder">image<ReactToggle checked = {this.state.backgroundType} className = "toggle" onChange = {this.typeChanged}></ReactToggle>Video</div>
                {this.renderUpload()}
            </div>
        )
    }
}

export default BackgroundSelector;