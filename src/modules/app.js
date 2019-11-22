import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import Bar from './navigation/bar';
import Intro from './Introduction/intro';
import Projects from './projects/projects';
import PrimaryForm from './addProjects/primaryForm';
import SecondaryForm from './addProjects/secondaryForm';
import Email from './email/email';
import NavDetector from './navDetector';

import fashionify1 from './resources/fashionify-desktop.png';
import fashionify2 from './resources/fashionify-mobile.png';
import karrotKing from './resources/KarrotKing.png';
import canadaStrikesBack from './resources/CanadaStrikesBack.png';
import carCoster1 from './resources/carcoster1.png';
import karrotKingVideo from './resources/KarrotKing.mp4';
import SecondaryProjects from './secondary-projects/secondaryProjects';
import Footer from './footer/footer';
import Login from './login/login';
import ProjectPage from './projectPage/projectPage';

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
            <NavDetector>
                <Intro />
                <Projects
                    projects = {projects}
                />
                <SecondaryProjects
                    projects = {secondaryProjects}
                />
                <Footer />
            </NavDetector>
        </div>
    ); 
}

const project = (props) => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <ProjectPage
                    id = {props.match.params.id}
                />
                <Footer />
            </NavDetector>
            
        </div>
    )
}

const addPrimary = () => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <PrimaryForm
                    editing = {false}
                />
                <Footer />
            </NavDetector>
        </div>
    )
}

const editPrimary = (props) => {
    console.log(props.match.params.id);
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <PrimaryForm
                    id = {props.match.params.id}
                    editing = {true}
                />
                <Footer/>
            </NavDetector>
        </div>
    )
}

const addSecondary = () => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <SecondaryForm/>
                <Footer />
            </NavDetector>
        </div>
    )
}

const editSecondary = (props) => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <SecondaryForm
                    id = {props.match.params.id}
                    editing = {true}
                />
                <Footer />
            </NavDetector>
        </div>
    )
}

const login = () => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <Login />
                <Footer />
            </NavDetector>
        </div>
    )
}

const sendEmail = () => {
    return (
        <div className = "container">
            <Bar />
            <NavDetector>
                <Email/>
                <Footer/>
            </NavDetector>
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

    componenDidMount = () => {
        console.log("App has loaded");
        window.addEventListener('scroll', this.scrolling);
        this.scrolling();
    }

    scrolling = () => {
        console.log("header height: " + document.getElementById('someDiv').offsetHeight + "px");
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
                    <Route path = '/addprimary' component = {addPrimary}/>
                    <Route path = '/addsecondary' component = {addSecondary}/>
                    <Route path = "/project/:id" component = {project} />
                    <Route path = '/editprimary/:id' component = {editPrimary}/>
                    <Route path = '/editsecondary/:id' component = {editSecondary}/>
                    <Route path = "/login" component = {login} />
                    <Route path = "/email" component = {sendEmail} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;