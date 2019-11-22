import React from 'react';
import {connect} from 'react-redux';

import Logo from './logo';
import Links from './links';

import "./style/bar.css";

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            header: "full"
        };
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.scrolling);
        this.scrolling();
    }

    scrolling = () => {
        const scroll = window.pageYOffset
        console.log(window.pageYOffset)
        if(scroll > 100) {
            this.setState({
                scrollPosition: scroll,
                header: "minimized"
            })
        } else {
            this.setState({
                scrollPosition: scroll,
                header: "full"
            })
        }
    }

    componentDidUpdate() {

    }
    
    hovering = () => {
        this.setState({
            header: "full",
            hovering: true
        })
    }

    stoppedHovering = () => {
        this.setState({
            hovering: false
        })

        if(this.state.scrollPosition > 100) {
            this.setState({
                header: "minimized"
            })
        }
    }

    touched = () => {
        this.setState({
            header: "full"
        })
    }

    render () {
        return (
            <div className = {`nav ${this.state.header}`}
            onMouseEnter = {this.hovering}
            onMouseLeave = {this.stoppedHovering}
            onTouchStart = {this.touched}
            id = "nav"
            >
                <Logo
                    header = {this.state.header}    
                />
                <Links
                    header = {this.state.header}
                    links = {[
                        {
                            name: "GitHub",
                            hyperlink: "https://github.com/joshua-cross",
                            type: "external"
                        },
                        {
                            name: "LinkedIn",
                            hyperlink: "https://www.linkedin.com/in/josh-cross-043491a6",
                            type: "external"
                        },
                        {
                            name: "Email",
                            hyperlink: "/email",
                            type: "internal"
                        },
                        {
                            name: "CV",
                            hyperlink: "JoshuaCrossCV.pdf",
                            type: "external"
                        }
                    ]}
                />
            </div>
        );
    }
}

export default connect (null)(Bar);
