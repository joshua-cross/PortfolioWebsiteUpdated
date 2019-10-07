import React from 'react';

import Logo from './logo';

import "./style/bar.css";

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render () {
        return (
            <div className = "nav">
                <Logo />
                <a href = "http://google.com">Google</a>
            </div>
        );
    }
}

export default Bar;