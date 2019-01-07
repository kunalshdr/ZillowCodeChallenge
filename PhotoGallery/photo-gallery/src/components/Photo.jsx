import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
    render() {
        return (
            <div className = "imageContainer">
                <img src = {this.props.imageUrl} alt = {this.props.imageCaption} height = "225" width = "225" onClick = {this.props.onClickHandler} />
                <div className = "captionText"> {this.props.imageCaption} </div>
            </div>
        );
    }
}

export default Photo;