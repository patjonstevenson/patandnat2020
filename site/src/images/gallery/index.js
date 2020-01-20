import fs from "fs";

import bigImages from "./";
import thumbs from "thumbnails/"

const imageSrc = [
    "../images/gallery/DSC05255.jpeg",
    "../images/gallery/DSC05258.jpeg",
    "../images/gallery/DSC05262.jpeg",
    "../images/gallery/DSC05264.jpeg",
    "../images/gallery/DSC05265.jpeg",
    "../images/gallery/DSC05273.jpeg",
    "../images/gallery/DSC05275.jpeg",
    "../images/gallery/DSC05289.jpeg",
    "../images/gallery/DSC05291.jpeg",
    "../images/gallery/DSC05293.jpeg",
    "../images/gallery/DSC05294.jpeg",
    "../images/gallery/DSC05297.jpeg",
    "../images/gallery/DSC05299.jpeg",
    "../images/gallery/DSC05302.jpeg",
    "../images/gallery/DSC05303.jpeg",
    "../images/gallery/DSC05305.jpeg",
    "../images/gallery/DSC05306.jpeg",
    "../images/gallery/DSC05308.jpeg",
    "../images/gallery/DSC05312.jpeg",
    "../images/gallery/DSC05323.jpeg",
    "../images/gallery/DSC05328.jpeg",
    "../images/gallery/DSC05330.jpeg",
    "../images/gallery/DSC05336.jpeg",
    "../images/gallery/DSC05341.jpeg",
    "../images/gallery/DSC05342.jpeg",
    "../images/gallery/DSC05345.jpeg",
    "../images/gallery/DSC05346.jpeg",
    "../images/gallery/DSC05349.jpeg",
    "../images/gallery/DSC05351.jpeg",
    "../images/gallery/DSC05353.jpeg",
    "../images/gallery/DSC05354.jpeg",
    "../images/gallery/DSC05356.jpeg",
    "../images/gallery/DSC05360.jpeg",
    "../images/gallery/DSC05362.jpeg",
    "../images/gallery/DSC05363.jpeg",
    "../images/gallery/DSC05364.jpeg",
    "../images/gallery/DSC05366.jpeg",
    "../images/gallery/DSC05367.jpeg",
    "../images/gallery/DSC05369.jpeg",
    "../images/gallery/DSC05370.jpeg",
    "../images/gallery/DSC05371-edited.jpeg",
    "../images/gallery/DSC05373-edited.jpeg",
    "../images/gallery/DSC05374.jpeg",
    "../images/gallery/DSC05379.jpeg",
    "../images/gallery/DSC05380.jpeg",
    "../images/gallery/DSC05382.jpeg",
    "../images/gallery/DSC05399.jpeg",
    "../images/gallery/DSC05401.jpeg",
    "../images/gallery/DSC05405.jpeg",
    "../images/gallery/DSC05422.jpeg",
    "../images/gallery/DSC05428.jpeg",
    "../images/gallery/DSC05429.jpeg",
    "../images/gallery/DSC05435.jpeg",
    "../images/gallery/DSC05436.jpeg",
    "../images/gallery/DSC05437.jpeg",
    "../images/gallery/DSC05439.jpeg",
    "../images/gallery/DSC05440.jpeg",
    "../images/gallery/DSC05441.jpeg",
    "../images/gallery/DSC05442.jpeg",
    "../images/gallery/DSC05447.jpeg",
    "../images/gallery/DSC05450.jpeg",
    "../images/gallery/DSC05451.jpeg",
    "../images/gallery/DSC05452.jpeg",
    "../images/gallery/DSC05453.jpeg",
    "../images/gallery/DSC05455.jpeg",
    "../images/gallery/DSC05456.jpeg",
    "../images/gallery/DSC05458.jpeg",
    "../images/gallery/DSC05460.jpeg",
    "../images/gallery/DSC05461.jpeg",
    "../images/gallery/DSC05462.jpeg",
    "../images/gallery/DSC05463.jpeg",
    "../images/gallery/DSC05465.jpeg",
    "../images/gallery/DSC05466 -edited.jpeg",
    "../images/gallery/DSC05466.jpeg",
    "../images/gallery/DSC05469.jpeg",
    "../images/gallery/DSC05470.jpeg",
    "../images/gallery/DSC05471.jpeg",
    "../images/gallery/DSC05475.jpeg",
    "../images/gallery/DSC05476.jpeg",
    "../images/gallery/DSC05477.jpeg",
    "../images/gallery/DSC05478.jpeg",
    "../images/gallery/DSC05479.jpeg",
    "../images/gallery/DSC05480.jpeg",
    "../images/gallery/DSC05482.jpeg",
    "../images/gallery/DSC05483.jpeg",
    "../images/gallery/DSC05485.jpeg",
    "../images/gallery/DSC05486.jpeg",
    "../images/gallery/DSC05487.jpeg",
    "../images/gallery/DSC05488.jpeg",
    "../images/gallery/DSC05492.jpeg",
    "../images/gallery/FF3BD35B-A6F5-4203-BD77-52A440A3E2A0_1_105_c.jpeg"
];

const thumbnails = [
    "../images/gallery/thumbnails/thumb-DSC05255.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05258.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05262.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05264.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05265.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05273.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05275.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05289.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05291.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05293.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05294.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05297.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05299.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05302.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05303.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05305.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05306.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05308.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05312.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05323.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05328.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05330.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05336.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05341.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05342.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05345.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05346.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05349.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05351.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05353.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05354.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05356.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05360.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05362.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05363.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05364.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05366.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05367.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05369.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05370.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05371-edited.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05373-edited.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05374.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05379.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05380.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05382.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05399.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05401.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05405.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05422.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05428.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05429.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05435.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05436.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05437.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05439.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05440.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05441.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05442.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05447.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05450.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05451.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05452.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05453.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05455.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05456.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05458.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05460.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05461.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05462.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05463.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05465.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05466 -edited.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05466.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05469.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05470.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05471.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05475.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05476.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05477.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05478.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05479.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05480.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05482.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05483.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05485.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05486.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05487.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05488.jpeg",
    "../images/gallery/thumbnails/thumb-DSC05492.jpeg",
    "../images/gallery/thumbnails/thumb-FF3BD35B-A6F5-4203-BD77-52A440A3E2A0_1_105_c.jpeg"
];

const images = imageSrc.map((src, index) => (
    {
        src,
        thumbnail: thumbnails[index],
        thumbnailWidth: 500,
        thumbnailHeight: 500,
    }
))

export default images;