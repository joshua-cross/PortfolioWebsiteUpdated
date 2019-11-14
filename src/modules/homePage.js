import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
}

export default HomePage;