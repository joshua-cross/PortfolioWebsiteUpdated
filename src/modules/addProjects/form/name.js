import React from 'react';

class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            className: "input-no-error"
        }
    }

    componentDidMount = () => {
        if(this.props.value) {
            this.setState({
                name: this.props.value
            })
        }
    }

    // componentWillReceiveProps = (nextProps) => {
    //     if(this.state.name === "" && nextProps.value) {
    //         this.setState({
    //             name: this.props.value
    //         })
    //     }
    // }

    nameChanged = (event) => {
        var name = event.target.value;
        this.setState({
            name: name
        });
        this.props.nameChanged(name);
    }

    render() {
        return (
            <div>
                <div className = {`form-label`}>
                    <label for = "name">Project Name</label>
                </div>
                <input 
                    type = "text"
                    name = "name"
                    className = {this.state.className}
                    value = {this.state.name}
                    onChange = {this.nameChanged}
                />
            </div>
        )
    }
}

export default Name;