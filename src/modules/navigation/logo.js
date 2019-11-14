import React from 'react';
import './style/logo.css'
import {connect} from 'react-redux';


class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: this.props.header
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.header) {
            this.setState({
                header: nextProps.header
            })
        }
    }

    render() {
        if(this.state.header === "full") {
            return (
                <div class = {`logo logo-full`}>
                    <p className = "main-text">Joshua Cross</p>
                    <p className = "secondary-text">Full stack developer</p>
                </div>
            );
        } else if (this.state.header === "minimized") {
            return (
                <div class = {`logo logo-minimized`}>
                    <p className = "minimized-text">JC</p>
                </div>
            );
        }
    
    }
}

export default connect(null)(Logo);