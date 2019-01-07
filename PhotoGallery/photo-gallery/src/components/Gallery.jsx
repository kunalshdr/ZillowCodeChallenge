import React, { Component } from 'react';
import Photo from './Photo';
import './Gallery.css';
import PhotoViewer from './PhotoViewer';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPhotoIndex: -1,
            selectedPhotoUrl: null,
            selectedPhotoCaption: null
        }
     }

    onPhotoClickHandler(index) {
        this.setState({
            selectedPhotoIndex: index,
            selectedPhotoUrl: this.props.photos[index].url,
            selectedPhotoCaption: this.props.photos[index].caption
        });
    }

    closePhotoViewer() {
        this.setState({
            selectedPhotoIndex: -1,
            selectedPhotoUrl: null,
            selectedPhotoCaption: null
        });
    }

    showNextPhoto() {
        let currentIndex = this.state.selectedPhotoIndex;
        // if user is on last photo, clicking prev will take him to first photo
        // like a cyclic image slideshow
        if (currentIndex === this.props.photos.length - 1) {
            currentIndex = -1;
        }
        let nextIndex = currentIndex + 1;

        this.setState({
            selectedPhotoIndex: nextIndex,
            selectedPhotoUrl: this.props.photos[nextIndex].url,
            selectedPhotoCaption: this.props.photos[nextIndex].url,
        });
    }

    showPrevPhoto() {
        let currentIndex = this.state.selectedPhotoIndex;
        // if user is on first photo, clicking prev will take him to last photo
        // like a cyclic image slideshow
        if (currentIndex === 0) {
            currentIndex = this.props.photos.length;
        }
        let nextIndex = currentIndex - 1;

        this.setState({
            selectedPhotoIndex: nextIndex,
            selectedPhotoUrl: this.props.photos[nextIndex].url,
            selectedPhotoCaption: this.props.photos[nextIndex].url,
        });
    }

    handleKeyDown(event) {
        // don't react to key events if user isn't in the PhotoViewer mode
        if (this.state.selectedPhotoIndex < 0) {
            return;
        }

        // left and right arrow key events
        if (event.keyCode === 37) {
            this.showPrevPhoto();
        } else if (event.keyCode === 39) {
            this.showNextPhoto();
        }
    }

    render() {
        // For each photo, make a Photo component and add it to array
        let photoCollection = [];
        for (let i = 0; i < this.props.photos.length; i++) {
            let photo = this.props.photos[i];
            photoCollection.push(<Photo imageUrl = {photo.url} imageCaption = {photo.caption}
                onClickHandler = {this.onPhotoClickHandler.bind(this, i) } />);
        }

        return (
            <div className = "galleryContainer" onKeyDown={this.handleKeyDown.bind(this)} tabIndex="0">
                {photoCollection}
                <PhotoViewer url = {this.state.selectedPhotoUrl} caption = {this.state.selectedPhotoCaption} >
                    <FontAwesomeIcon onClick = {this.closePhotoViewer.bind(this)}
                        className = "iconColor rightSide" icon = {faWindowClose} size = "3x" />

                    <div className = "row navIcons">
                        <button className = "btn btn-primary btn-lg" onClick = {this.showPrevPhoto.bind(this)}>
                            Prev
                        </button>
                        <button className = "btn btn-primary btn-lg" onClick = {this.showPrevPhoto.bind(this)}>
                            Next
                        </button>
                    </div>
                </PhotoViewer>
            </div>
        );
    }
}


export default Gallery;