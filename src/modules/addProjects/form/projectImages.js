import React from 'react';
import Upload from './upload';

class ProjectImages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            imageCount: 1,
            imagesActive: ["active"],
            images: [],
            files: [undefined]
        }
    }

    addFile = (file, fileId) => {
        console.log("fileId: " + fileId + " file: " + file);
        var images = this.state.files;
        images[fileId] = file;
        // images.push(file);
        // var imagesActive = this.state.imagesActive;
        // imagesActive[imagesActive.length - 1] = "disabled"
        this.setState({
            files: images,
        })
    }

    removePrintscreen = (event) => {
        var id = parseInt(event.target.id);
        // console.log("removing: " + id);
        // var files = this.state.images;
        // files.splice(id, 1);
        // var imagesActive = this.state.imagesActive;
        // imagesActive.splice(id, 1);
        // this.setState({
        //     imageCount: this.state.imageCount - 1,
        //     images: files,
        //     imagesActive: imagesActive
        // });
        var files = this.state.files;
        files.splice(id, 1);
        this.setState({
            files: files
        })
    }
    
    renderImageUploads = () => {
        console.log("Files: ", this.state.files);
        return this.state.files.map((file, i) => {
            var removeButton;
            if(this.state.files.length !== 1) {
                removeButton = <button id = {i} onClick = {this.removePrintscreen}>Remove printscreen</button>;
            }
            if(file) {
                return (
                    <div>
                        {removeButton}
                        <Upload 
                            label = {`Printscreen ${i + 1}`}
                            type = "image"
                            fileChosen = {this.addFile}
                            value = {file}
                            active = "active"
                            fileId = {i}
                        />
                    </div>
                );
            } else {
                return (
                    <div>
                        {removeButton}
                        <Upload 
                        label = {`Printscreen ${i + 1}`}
                        type = "image"
                        fileChosen = {this.addFile}
                        active = "active"
                        fileId = {i}
                        />
                    </div>
                );
            } 
        })
        // var uploads = [];

        // for(var i = 0; i < this.state.imageCount; i++) {
        //     var upload;
        //     if(this.state.images[i]) {
        //         upload = (
        //             <Upload 
        //                 label = {`Printscreen ${i + 1}`}
        //                 type = "image"
        //                 fileChosen = {this.addFile}
        //                 value = {this.state.images[i]}
        //                 active = {this.state.imagesActive[i]}
        //             />
        //         );
        //     } else {
        //         upload = (
        //             <Upload 
        //                 label = {`Printscreen ${i + 1}`}
        //                 type = "image"
        //                 fileChosen = {this.addFile}
        //                 active = {this.state.imagesActive[i]}
        //             />
        //         );
        //     }
        //     if(this.state.imageCount !== 1) {
        //         uploads.push(
        //             <div>
        //                 <button id = {i} onClick = {this.removePrintscreen}>Remove printscreen</button>
        //                 {upload}
        //             </div>
        //         )
        //     } else {
        //         uploads.push(
        //             <div>
        //                 {upload}
        //             </div>
        //         )
        //     }
        // }
        // return <div>{uploads}</div>
    }

    addImage = () => {
        var files = this.state.files;
        files.push(undefined)
        this.setState({
            files: files
        })
        // if(this.state.images.length === this.state.imageCount) {
        //     this.setState({
        //         errors: []
        //     })
        //     var imagesActive = this.state.imagesActive;
        //     imagesActive.push("active");
        //     this.setState({
        //         imageCount: this.state.imageCount + 1,
        //         imagesActive: imagesActive
        //     })
        // } else {
        //     var errors = [];
        //     errors.push("Please assign value to each screenshot before adding another");
        //     this.setState({
        //         errors: errors
        //     })
        // }
    }

    renderErrors = () => {
        return this.state.errors.map((error) => {
            return <div className = "error"><p>{error}</p></div>
        })
    }

    render() {
        return(
            <div className = "printscreens">
                <h2>Printscreens</h2>
                <div className = "errors">
                    {this.renderErrors()}
                </div>
                <button
                className = "addImageButton"
                onClick = {this.addImage}
                >
                    Add image
                </button>
                {this.renderImageUploads()}
            </div>
        )
    }
}

export default ProjectImages;