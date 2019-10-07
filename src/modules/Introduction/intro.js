import React from 'react';

import Image from './image';

import './style/intro.css';
class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className = "intro">
                <Image />
                <div class = "text">
                    <h1>Hello, I’m Joshua Cross!</h1>
                    <h2>Web and Mobile Application Developent Student</h2>
                    <h3>Yes, this is a test paragraph that is very good at testing the functionalities of the website.</h3>
                </div>
            </div>
        );
    }
}

export default Intro;