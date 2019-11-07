import React from 'react';
import {connect} from 'react-redux';
import {addSecondaryProject} from '../../actions';

import '../login/style/login.css';

class SecondaryProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "login">
                <p>Testing 2 electric bugaloo</p>
            </div>
        )
    }
}

export default connect(null, {addSecondaryProject})(SecondaryProject);