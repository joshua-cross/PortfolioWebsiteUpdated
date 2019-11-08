import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            className: "input-no-error"
        }
    }
    
    componentDidMount = () => {
        if(this.props.value) {
            this.setState({
                description: this.props.value
            })

            this.props.fieldChanged(this.props.value);
        }
    }

    descriptionChanged = (e) => {
        var description = e.target.value;
        this.setState({
            description: description
        });
        this.props.fieldChanged(description)
    }

    render() {
        return(
            <div>
                <div className = "form-label">
                    <label for = "description">{this.props.labelText}</label>
                </div>
                <textarea
                name = "description"
                className = {this.state.className}
                value = {this.state.description}
                onChange = {this.descriptionChanged}
                />
            </div>
        )
    }
}

export default Textarea;