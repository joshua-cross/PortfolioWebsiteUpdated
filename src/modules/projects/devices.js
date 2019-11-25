import React from 'react';
import { MarvelDevices } from 'react-css-devices';

class Devices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desktopScaling: 0.45,
            mobileScaling: 0.25,
            className: "devices"
        }
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.detectWidth);
        this.detectWidth();
    }
    
    componentDidUpdate = () => {

    }

    detectWidth = () => {
        if(this.props.desktopImage) {
            console.log(window.innerWidth);
            //if this is a mobile device, scale the devices proportionally
            if(window.innerWidth <= 374) {
                this.setState({
                    desktopScaling: 0.22,
                    mobileScaling: 0.135
                })
            } else if (window.innerWidth < 414) {
                this.setState({
                    desktopScaling: 0.245,
                    mobileScaling: 0.15
                });
            } else if (window.innerWidth < 600) {
                this.setState({
                    desktopScaling: 0.28,
                    mobileScaling: 0.175
                })
            } else if(window.innerWidth < 768) {
                this.setState({
                    desktopScaling: 0.4,
                    mobileScaling: 0.25
                });
            } else if (window.innerWidth < 1000) {
                this.setState({
                    desktopScaling: 0.5,
                    mobileScaling: 0.3
                })
            } else if (window.innerWidth < 1300) {
                this.setState({
                    desktopScaling: 0.64,
                    mobileScaling: 0.375
                })
            } else {
                this.setState({
                    desktopScaling: 0.45,
                    mobileScaling:0.25
                })
            }
        } 
        //if just the mobileImage is set, the mobile device should be bigger.
        else if(this.props.mobileImage) {
            this.setState({
                className: "devicesMobileOnly"
            })
            if(window.innerWidth <= 374) {
                this.setState({
                    mobileScaling: 0.21
                })
            } else if (window.innerWidth < 414) {
                this.setState({
                    mobileScaling: 0.24
                });
            } else if (window.innerWidth < 600) {
                this.setState({
                    mobileScaling: 0.28
                })
            } else if(window.innerWidth < 768) {
                this.setState({
                    mobileScaling: 0.31
                });
            } else if (window.innerWidth < 1000) {
                this.setState({
                    mobileScaling: 0.4
                })
            } else if (window.innerWidth < 1300) {
                this.setState({
                    mobileScaling: 0.5
                })
            } else {
                this.setState({
                    mobileScaling:0.45
                })
            }
        }
    }

    //if there is a mobile device, render it.
    renderMobileDevice = () => {
        if(this.props.mobileImage) {
            return (
                <div className = "phone">
                    <MarvelDevices
                        deviceName = {"iphone6"}
                        color = {"black"}
                        orientation = {"portrait"}
                        transform = {this.state.mobileScaling}
                        className = "devices"
                    >
                        <div className = "deviceImage">
                        <img src = {this.props.mobileImage} />
                        </div>
                    </MarvelDevices>
                </div> 
            )
        }
    }

    renderDesktopDevice = () => {
        if(this.props.desktopImage) {
            return (
                <div className = "laptop">
                    <MarvelDevices
                        deviceName = {"macbook"}
                        color = {"black"}
                        orientation = {"portrait"}
                        transform = {this.state.desktopScaling}
                    >
                        <div className = "deviceImage">
                            <img src = {this.props.desktopImage} />
                        </div>
                    </MarvelDevices>
                </div>
            )
        }
    }

    render() {
        return(
            <div className = {this.state.className}>
                {this.renderMobileDevice()}
                {this.renderDesktopDevice()}                
            </div>
        );
    }
}

export default Devices