import React, {PureComponent} from "react";

class GalleryPopup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nextSlide: this.props.nextImg,
            prevSlide: this.props.prevImg
        }
    }

    moveObj = {}

    startMove(e) {
        this.currentImg.style.transition = "";
        this.moveObj.startX = e.changedTouches[0].screenX;
    }

    move(e) {
        let diff = e.changedTouches[0].screenX - this.moveObj.startX;
        this.currentImg.style.left = diff + "px";
    }

    endMove(e) {
        console.log(e.changedTouches[0].screenX - this.moveObj.startX)
        if (e.changedTouches[0].screenX - this.moveObj.startX > 100) {
            this.state.prevSlide();
        }
        if (e.changedTouches[0].screenX - this.moveObj.startX < -100) {
            this.state.nextSlide();
        }
        this.currentImg.style.left = "0px";
        this.currentImg.style.transition = ".3s";
    }

    render() {
        let classVisible = () => {
            if (this.props.visible === false)
                return "react-gallery-popup_hidden";
            else return "react-gallery-popup_visible";
        }
        return (
            <div className={"react-gallery-popup " + classVisible()}>
                <div className="react-gallery-popup__background" onClick={this.props.closePopup}></div>
                <img src={this.props.currentImg} alt="" className="react-gallery-popup__img"
                     onTouchStart={(e) => {
                         this.startMove(e)
                     }}
                     onTouchMove={(e) => {
                         this.move(e)
                     }}
                     onTouchEnd={(e) => {
                         this.endMove(e)
                     }}
                     ref={(ref) => this.currentImg = ref}/>
                <div className="react-gallery-popup__controller react-gallery-popup__controller-left"
                     onClick={this.state.prevSlide}> {"<"}</div>
                <div className="react-gallery-popup__controller react-gallery-popup__controller-right"
                     onClick={this.state.nextSlide}> {">"}</div>
            </div>
        );
    }
}

export default GalleryPopup;