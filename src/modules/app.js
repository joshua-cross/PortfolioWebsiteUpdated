import React from 'react';

import Bar from './navigation/bar';
import Intro from './Introduction/intro';
import Projects from './projects/projects';

import fashionify1 from './resources/fashionify-desktop.png';
import fashionify2 from './resources/fashionify-mobile.png';

const projects = [
    {
        name: "Fashionify",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        technologies: [
            "html", "css", "javascript", "sass", "react", "redux", "php", "laravel"
        ],
        desktopImage: fashionify1,
        mobileImage: fashionify2
    },
    {
        name: "Fashionify",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        technologies: [
            "html", "css", "javascript", "sass", "react", "node"
        ],
        desktopImage: fashionify1,
        mobileImage: fashionify2
    },
    {
        name: "Fashionify",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        technologies: [
            "html", "css", "javascript", "sass", "react", "php", "laravel"
        ],
        desktopImage: fashionify1,
        mobileImage: fashionify2
    },
    {
        name: "Fashionify",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        technologies: [
            "html", "css", "javascript", "sass", "react", "php", "laravel"
        ],
        desktopImage: fashionify1,
        mobileImage: fashionify2
    },
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componenDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className = "container">
                <Bar />
                <Intro />
                <Projects
                    projects = {projects}
                />
            </div>
        );
    }
}

export default App;