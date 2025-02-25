import React from 'react';
import validator from 'validator';

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: undefined
        }
    }

    componentDidMount = () => {
        if(this.props.value) {
            console.log("This image has the file: " + this.props.value)
            this.setState({
                file: this.props.value
            })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.value) {
            var image = nextProps.value;
            if(typeof image === 'string') {
                //ensuring the url is a link so we don't override new images.
                if(validator.isURL(image)) {
                    console.log("This image has the file: " + nextProps.value)
                    this.setState({
                        file: nextProps.value
                    })
                }
            }
        }
    }

    imageChanged = (e) => {
        // console.log(e.target.files[0]);
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        });
        this.props.fileChosen(e.target.files[0], this.props.fileId);
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

    //displyaying the label of the upload.
    displayLabel = () => {
        if(this.props.label) {
            return (
                <div className = "form-label">
                    <label for = "upload">{this.props.label}</label>
                </div>
            )
        }
    }

    displayUpload = () => {
        if(this.props.type === "image") {
            if(this.props.active === "disabled") {
                return (
                    <div className = "upload-holder-disabled">
                        <label className = "upload-disabled">
                            Upload Image
                            <input 
                            type = "file" 
                            name = "upload" 
                            accept = "image/*" 
                            onChange = {this.imageChanged}
                            disabled
                            />
                        </label>
                    </div>
                )
            } else {
                return (
                    <div className = "upload-holder">
                        <label className = "upload">
                            Upload Image
                            <input 
                            type = "file" 
                            name = "upload" 
                            accept = "image/*" 
                            onChange = {this.imageChanged}
                            />
                        </label>
                    </div>
                )
            }
        } else if (this.props.type === "video") {
            if(this.props.active === "disabled") {
                return (
                    <div className = "upload-holder-disabled">
                        <label className = "upload-disabled">
                            Upload Video
                            <input 
                            type = "file" 
                            name = "upload" 
                            accept = "video/*" 
                            onChange = {this.imageChanged}
                            disabled
                            />
                        </label>
                    </div>
                )
            } else {
                return (
                    <div className = "upload-holder">
                        <label className = "upload">
                            Upload Video
                            <input 
                            type = "file" 
                            name = "upload" 
                            accept = "video/*" 
                            onChange = {this.imageChanged}
                            />
                        </label>
                    </div>
                )
            }
        }
    }



    render() {
        return(
            <div className = "imageUpload">
                {this.displayContent()}
                {this.displayLabel()}
                {this.displayUpload()}
            </div>
        )
    }
}

export default Upload;