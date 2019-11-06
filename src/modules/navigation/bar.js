import React from 'react';
import {connect} from 'react-redux';

import Logo from './logo';
import Links from './links';

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
                <Links
                    links = {[
                        {
                            name: "GitHub",
                            hyperlink: "https://github.com/joshua-cross"
                        },
                        {
                            name: "LinkedIn",
                            hyperlink: "http://linkedin.com"
                        },
                        {
                            name: "Email",
                            hyperlink: "http://youtube.com"
                        },
                        {
                            name: "CV",
                            hyperlink: "http://youtube.com"
                        }
                    ]}
                />
            </div>
        );
    }
}

export default connect (null)(Bar);
