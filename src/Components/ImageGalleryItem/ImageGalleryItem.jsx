import React from 'react';

const ImageGalleryItem = ({ imgItem }) => {
    <li className="ImageGalleryItem" id={imgItem.id} >
        <img src={imgItem.previewURL} alt={imgItem.tags} className="ImageGalleryItem-image" />
    </li>
}


export default ImageGalleryItem;