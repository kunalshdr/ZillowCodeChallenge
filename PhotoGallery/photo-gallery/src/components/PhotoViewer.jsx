import React, { Component } from 'react';
import './PhotoViewer.css';

class PhotoViewer extends Component {
    render() {
        // don't show anything when user hasn't selected a photo
        if(!this.props.url) {
            return null;
        }

        return (
            <div className = "photoViewerContainer">
                <img className = "photoInViewer" src = {this.props.url} alt = {this.props.caption} />
                {this.props.children}
            </div>
        );
    }
}

export default PhotoViewer;
