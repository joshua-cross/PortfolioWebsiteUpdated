import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import Bar from './navigation/bar';
import Intro from './Introduction/intro';
import Projects from './projects/projects';

import fashionify1 from './resources/fashionify-desktop.png';
import fashionify2 from './resources/fashionify-mobile.png';
import karrotKing from './resources/KarrotKing.png';
import canadaStrikesBack from './resources/CanadaStrikesBack.png';
import carCoster1 from './resources/carcoster1.png';
import karrotKingVideo from './resources/KarrotKing.mp4';
import SecondaryProjects from './secondary-projects/secondaryProjects';
import Footer from './footer/footer';
import Login from './login/login';

const secondaryProjects = [
    {
        id: 1,
        name: "Fashionify",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        image: karrotKing,
        video: karrotKingVideo
    },
    {
        id: 2,
        name: "Canada strikes back",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        image: canadaStrikesBack,
        video: karrotKingVideo
    },
    {
        id: 3,
        name: "Car Coster",
        description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
        role: "Designed, developed and tested the website",
        image: carCoster1,
        video: karrotKingVideo
    }
];

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

const homePage = () => {
    return (
        <div className = "container">
            <Bar />
            <Intro />
            <Projects
                projects = {projects}
            />
            <SecondaryProjects
                projects = {secondaryProjects}
            />
            <Footer />
        </div>
    ); 
}

const project = () => {
    return (
        <div className = "container">
            <Bar />
            <p>Hello World</p>
            <Footer />
        </div>
    )
}

const add = () => {
    return (
        <div className = "container">
            <Bar />
            <p>Hello World</p>
            <Footer />
        </div>
    )
}

const login = () => {
    return (
        <div className = "container">
            <Bar />
            <Login />
            <Footer />
        </div>
    )
}

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

    homePage = () => {

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path = "/" exact component = {homePage} />
                    <Route path = "/project/:id" component = {project} />
                    <Route path = "/login" component = {login} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;