import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: this.props.header
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.header) {
            this.setState({
                header: nextProps.header
            })
        }
    }

    renderLinks = () => {
        var links;

        var add = ""
        var add2 = ""

        if(this.props.status === "access granted" && this.state.header === "full") {
            add = (
                <div>
                    <Link to = "/addprimary">Add Primary</Link>
                </div>
            )

            add2 = (
                <div>
                    <Link to = "/addsecondary">Add Secondary</Link>
                </div>
            )
        }

        var links = this.props.links.map((link) => {
            return (
                <div>
                    <a href = {link.hyperlink}>{link.name}</a>
                </div>
            );
        })

        return <div>{add}{add2}{links}</div>
        
        // return this.props.links.map((link) => {
            
        // })
    }

    render() {
        return (
            <div className = "links">
                {this.renderLinks()}
            </div>
        );
    }
}
const mapStateToProps = (state, ourProps) => {
    return({
        status: state.login
    });
}
export default connect(mapStateToProps)(Links);