import React from 'react';

import Josh from './style/josh.png';

class Image extends React.Component {
    render() {
        return (
            <img className = "image" src = {Josh}></img>
        )
    }
}

export default Image;