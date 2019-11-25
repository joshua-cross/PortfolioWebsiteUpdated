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

    renderTech = () => {
        var tech = ["HTML", "CSS", "JavaScript", "MySQL", "PHP", "REST APIs", "Laravel", "React.js", "Redux", "Node.js"];
        return tech.map((t, i) => {
            var text = "";
            //if this is the last technology, don't print a ,
            if(i+1 === tech.length) {
                return (
                    <div className = "intro-tech">
                        <span>{t}</span>
                    </div>
                )
            }
            //if this is the second last technology, print and instrad of a ,
            else if(i+2 === tech.length) {
                return (
                    <div className = "intro-tech">
                        <span>{t}</span> and&nbsp;
                    </div>
                )
            } 
            //else print a ,
            else {
                return (
                    <div className = "intro-tech">
                        <span>{t}</span>,&nbsp;
                    </div>
                )
            }

            return (
                <div className = "intro-tech">
                    <span>{t}</span>{text}
                </div>
            )
        })
    }

    render() {
        return(
            <div className = "intro">
                <Image />
                <div class = "text">
                    <h1>Hello, I’m Joshua Cross!</h1>
                    <h2>Web and Mobile Application Developent Graduate</h2>
                    <h3>A self-motivated distinction grade master’s graduate with a passion for learning. Experienced in {this.renderTech()}</h3>
                </div>
            </div>
        );
    }
}

export default Intro;