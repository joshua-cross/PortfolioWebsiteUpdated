import React from 'react';

const currentTechnologies = [
    "html", "css", "javascript", "sass", "react", "redux", "php", "node", "laravel"
]

class Tech extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTech: [],
            className: "input-no-error"
        };
    }

    techChosen = (e) => {
        console.log(e.target.value);
        var theTech = e.target.value;
        var selectedTech = this.state.selectedTech;
        selectedTech.push(theTech);
        console.log(selectedTech);
        this.setState({
            selectedTech: selectedTech
        })
        this.props.techChanged(selectedTech);
    }

    renderSelect = () => {
        var options = currentTechnologies.map((currentTechnology) => {
            return <option value = {currentTechnology}>{currentTechnology}</option>
        })
        return (
            <select
                className = {this.state.className}
                onChange = {this.techChosen}
            >
                {options}
            </select>
        );
    }

    //removing an item with a given id.
    removeTech = (i) => {
        var selectedTech = this.state.selectedTech;
        selectedTech.splice(i, 1);
        this.setState({
            selectedTech: selectedTech
        })
        this.props.techChanged(selectedTech);
    }

    //rendering all the tech the user selected from the <options>
    renderTech = () => {
        return this.state.selectedTech.map((tech, i) => {
            return (
                <div
                className = "tech"
                onClick = {() => {this.removeTech(i)}}
                >
                    <p>{tech} <button className = "remove">x</button></p>
                </div>
            )
        })
    }



    render() {
        return (
            <div>
                <div className = "tech-holder">
                    {this.renderTech()}
                </div>
                <div className = "form-label">
                    <label for = "technologies">Technologies Used</label>
                </div>
                {this.renderSelect()}
            </div>
        )
    }
}

export default Tech;