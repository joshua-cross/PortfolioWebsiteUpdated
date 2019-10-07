import React from 'react';
import './style/logo.css'


class Logo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div class = "logo">
                <p className = "main-text">Joshua Cross</p>
                <p className = "secondary-text">Full stack developer</p>
            </div>
        );
    }
}

export default Logo;