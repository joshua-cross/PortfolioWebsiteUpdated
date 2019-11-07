import React from 'react';

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: undefined
        }
    }

    imageChanged = (e) => {
        // console.log(e.target.files[0]);
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        });
        this.props.fileChosen(e.target.files[0]);
    }

    //display image
    displayContent = () => {
        if(this.state.file && this.props.type === "image") {
            return <div><img src = {this.state.file}></img></div>
        } else if (this.state.file && this.props.type === "video") {
            return (
            <div>
                <video controls>
                    <source src = {this.state.file}></source>
                </video>
            </div>
            )
        }
    }

    displayUpload = () => {
        if(this.props.type === "image") {
            return (
                <input 
                type = "file" 
                name = "pic" 
                accept = "image/*" 
                onChange = {this.imageChanged}
                />
            )
        } else if (this.props.type === "video") {
            return (
                <input 
                type = "file" 
                name = "pic" 
                accept = "video/*" 
                onChange = {this.imageChanged}
                />
            )
        }
    }

    render() {
        return(
            <div className = "imageUpload">
                {this.displayContent()}
                {this.displayUpload()}
            </div>
        )
    }
}

export default Upload;