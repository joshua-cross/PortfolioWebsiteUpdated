import React from 'react';
import { MarvelDevices } from 'react-css-devices';

class Devices extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    
    componentDidUpdate() {

    }

    render() {
        return(
            <div>
            <MarvelDevices
                deviceName = {"iphone6"}
                color = {"black"}
                orientation = {"portrait"}
                transform = {0.25}
            >
                <p>Hello world</p>
            </MarvelDevices>
            <MarvelDevices
                deviceName = {"macbook"}
                color = {"black"}
                orientation = {"portrait"}
                transform = {0.5}
            >
                <p>Hello World</p>
            </MarvelDevices>
            </div>
        );
    }
}

export default Devices