import React from 'react';
import {Link} from 'react-router-dom';

import './style/footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className = "footer">
                <p>
                    © Joshua Cross 2019 - Website designed and developed by Joshua Cross - Joshua Cross? <Link to = "/login">Click here</Link> to sign in 
                </p>
            </footer>
        )
    }
}

export default Footer;