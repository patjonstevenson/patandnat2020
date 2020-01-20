import React from "react";
import ReactGallery from "react-grid-gallery";

// Pictures
import images from "../images/gallery/";
// import image1 from "../images/gallery/DSC05255.jpeg";

const Gallery = () => {
    console.log("Images:\n", images);
    return (
        <div className="gallery">
            <ReactGallery images={images} />
        </div>
    );
};

export default Gallery;