import React from 'react';

class NavDetector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            top: 0
        }
    }

    componentDidMount = () => {
        console.log("App has loaded");
        window.addEventListener('scroll', this.scrolling);
        this.scrolling();
    }

    scrolling = () => {
        console.log("header height: " + document.getElementById('nav').offsetHeight + "px");
        this.setState({
            top: document.getElementById('nav').offsetHeight
        })
    }

    render() {
        var style = {
            marginTop: this.state.top
        }
        return <div style = {style}>{this.props.children}</div>
    }
}

export default NavDetector