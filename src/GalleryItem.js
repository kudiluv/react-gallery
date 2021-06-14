import React,{PureComponent} from "react";


class GalleryItem extends PureComponent{
    render() {
        return(
            <img src={this.props.src} alt="" className="react-gallery__item"
                 onClick={(e)=>{this.props.clickEventHandler(e,this.props.src)}}/>
        );
    }
}

export default GalleryItem;