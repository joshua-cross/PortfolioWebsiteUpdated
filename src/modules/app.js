import React from 'react';

import Bar from './navigation/bar';
import Intro from './Introduction/intro';

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
            </div>
        );
    }
}

export default App;