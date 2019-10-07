import React from 'react';

class Links extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    renderLinks = () => {
        return this.props.links.map((link) => {
            return (
                <div><a href = {link.hyperlink}>{link.name}</a></div>
            )
        })
    }

    render() {
        return (
            <div className = "links">
                {this.renderLinks()}
            </div>
        );
    }
}

export default Links;