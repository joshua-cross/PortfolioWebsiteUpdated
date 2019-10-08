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
            <div className = "devices">
                <div className = "laptop">
                    <MarvelDevices
                        deviceName = {"macbook"}
                        color = {"black"}
                        orientation = {"portrait"}
                        transform = {0.45}
                    >
                        <p>Hello World</p>
                    </MarvelDevices>
                </div>
                <div className = "phone">
                    <MarvelDevices
                        deviceName = {"iphone6"}
                        color = {"black"}
                        orientation = {"portrait"}
                        transform = {0.25}
                    >
                        <p>Hello world</p>
                    </MarvelDevices>
                </div> 
            </div>
        );
    }
}

export default Devices