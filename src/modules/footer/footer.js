import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './style/footer.css';


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    //function to render the footer text
    renderFooterText = () => {
        if(this.props.status === "access granted") {
            return (
                <p>
                    © Joshua Cross 2019 - Website designed and developed by Joshua Cross
                </p>
            )
        } else {
            return (
                <p>
                    © Joshua Cross 2019 - Website designed and developed by Joshua Cross - Joshua Cross? <Link to = "/login">Click here</Link> to sign in 
                </p>
            )
        }
    }

    render() {
        return (
            <footer className = "footer">
                {this.renderFooterText()}
            </footer>
        )
    }
}

const mapStateToProps = (state, ourProps) => {
    return({
        status: state.login
    })
}

export default connect(mapStateToProps)(Footer);