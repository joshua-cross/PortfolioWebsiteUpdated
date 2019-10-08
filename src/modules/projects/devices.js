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
                        <div className = "deviceImage">
                            <img src = {this.props.desktopImage} />
                        </div>
                    </MarvelDevices>
                </div>
                <div className = "phone">
                    <MarvelDevices
                        deviceName = {"iphone6"}
                        color = {"black"}
                        orientation = {"portrait"}
                        transform = {0.25}
                    >
                        <div className = "deviceImage">
                        <img src = {this.props.mobileImage} />
                        </div>
                    </MarvelDevices>
                </div> 
            </div>
        );
    }
}

export default Devices