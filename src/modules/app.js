import React from 'react';

import Bar from './navigation/bar';

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
                <p>Hello World</p>
            </div>
        );
    }
}

export default App;