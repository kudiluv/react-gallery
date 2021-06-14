import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery";
import img1 from "./images/img.png";
import img2 from "./images/img_1.png";
import img3 from "./images/img_2.png";
import img4 from "./images/img_3.png";

let destination = document.querySelector("#root");


ReactDOM.render(
    <div>
        <Gallery images={[img1,img2,img3,img4]}/>
    </div>
    ,destination
)