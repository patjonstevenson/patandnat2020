import fs from "fs";

// Big Images
import image1 from "./big/DSC05306.jpeg";
import image2 from "./big/DSC05308.jpeg";
import image3 from "./big/DSC05330.jpeg";
import image4 from "./big/DSC05341.jpeg";
import image5 from "./big/DSC05346.jpeg";
import image6 from "./big/DSC05360.jpeg";
import image7 from "./big/DSC05364.jpeg";
import image8 from "./big/DSC05367.jpeg";
import image9 from "./big/DSC05371_edited.jpeg";
import image10 from "./big/DSC05380.jpeg";
import image11 from "./big/DSC05399.jpeg";
import image12 from "./big/DSC05405.jpeg";
import image13 from "./big/DSC05428.jpeg";
import image14 from "./big/DSC05429.jpeg";
import image15 from "./big/DSC05435.jpeg";
import image16 from "./big/DSC05436.jpeg";
import image17 from "./big/DSC05441.jpeg";
import image18 from "./big/DSC05453.jpeg";
import image19 from "./big/DSC05466_edited.jpeg";
import image20 from "./big/DSC05471.jpeg";
import image21 from "./big/DSC05475.jpeg";
import image22 from "./big/DSC05476.jpeg";
import image23 from "./big/DSC05483.jpeg";
import image24 from "./big/DSC05485.jpeg";

// Thumbnails
import thumb_image1 from "./thumbnails/thumb_DSC05306.jpeg";
import thumb_image2 from "./thumbnails/thumb_DSC05308.jpeg";
import thumb_image3 from "./thumbnails/thumb_DSC05330.jpeg";
import thumb_image4 from "./thumbnails/thumb_DSC05341.jpeg";
import thumb_image5 from "./thumbnails/thumb_DSC05346.jpeg";
import thumb_image6 from "./thumbnails/thumb_DSC05360.jpeg";
import thumb_image7 from "./thumbnails/thumb_DSC05364.jpeg";
import thumb_image8 from "./thumbnails/thumb_DSC05367.jpeg";
import thumb_image9 from "./thumbnails/thumb_DSC05371_edited.jpeg";
import thumb_image10 from "./thumbnails/thumb_DSC05380.jpeg";
import thumb_image11 from "./thumbnails/thumb_DSC05399.jpeg";
import thumb_image12 from "./thumbnails/thumb_DSC05405.jpeg";
import thumb_image13 from "./thumbnails/thumb_DSC05428.jpeg";
import thumb_image14 from "./thumbnails/thumb_DSC05429.jpeg";
import thumb_image15 from "./thumbnails/thumb_DSC05435.jpeg";
import thumb_image16 from "./thumbnails/thumb_DSC05436.jpeg";
import thumb_image17 from "./thumbnails/thumb_DSC05441.jpeg";
import thumb_image18 from "./thumbnails/thumb_DSC05453.jpeg";
import thumb_image19 from "./thumbnails/thumb_DSC05466_edited.jpeg";
import thumb_image20 from "./thumbnails/thumb_DSC05471.jpeg";
import thumb_image21 from "./thumbnails/thumb_DSC05475.jpeg";
import thumb_image22 from "./thumbnails/thumb_DSC05476.jpeg";
import thumb_image23 from "./thumbnails/thumb_DSC05483.jpeg";
import thumb_image24 from "./thumbnails/thumb_DSC05485.jpeg";

const bigImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
];


const thumbnails = [
    thumb_image1,
    thumb_image2,
    thumb_image3,
    thumb_image4,
    thumb_image5,
    thumb_image6,
    thumb_image7,
    thumb_image8,
    thumb_image9,
    thumb_image10,
    thumb_image11,
    thumb_image12,
    thumb_image13,
    thumb_image14,
    thumb_image15,
    thumb_image16,
    thumb_image17,
    thumb_image18,
    thumb_image19,
    thumb_image20,
    thumb_image21,
    thumb_image22,
    thumb_image23,
    thumb_image24,
];

const images = bigImages.map((src, index) => (
    {
        src,
        thumbnail: thumbnails[index],
        thumbnailWidth: 500,
        thumbnailHeight: 500,
    }
))

export default images;