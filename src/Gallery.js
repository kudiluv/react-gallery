import React, {Component} from "react";
import "./gallery.css";
import GalleryItem from "./GalleryItem";
import GalleryPopup from "./GalleryPopup";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            popupVisible: false,
            currentImg: undefined
        }
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.nextImg = this.nextImg.bind(this);
        this.prevImg = this.prevImg.bind(this);
    }

    openPopup(e, src) {
        this.setState({
            popupVisible: true,
            currentImg: src
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    nextImg() {
        let length = this.state.images.length;
        let index = this.state.images.indexOf(this.state.currentImg);
        if (index >= length - 1)
            this.setState({currentImg: this.state.images[0]});
        else
            this.setState({currentImg: this.state.images[index + 1]});
    }

    prevImg() {
        let length = this.state.images.length;
        let index = this.state.images.indexOf(this.state.currentImg);
        if (index == 0)
            this.setState({currentImg: this.state.images[length - 1]});
        else
            this.setState({currentImg: this.state.images[index - 1]});
    }

    createImages() {
        let images = this.props.images.map((image) => {
            return <GalleryItem src={image} key={"key" + image} clickEventHandler={this.openPopup}/>;
        });
        return (images);
    }

    render() {
        return (<div className="react-gallery">
            {this.createImages()}
            <GalleryPopup images={this.state.images} visible={this.state.popupVisible}
                          currentImg={this.state.currentImg} closePopup={this.closePopup}
                          nextImg={this.nextImg} prevImg={this.prevImg}/>
        </div>);
    }

}

export default Gallery;