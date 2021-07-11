import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imgItem }) => {
    <li className="ImageGalleryItem" id={imgItem.id} >
        <img src={imgItem.previewURL} alt={imgItem.tags} className="ImageGalleryItem-image" />
    </li>
}
ImageGalleryItem.prototype = {

    imgItem: PropTypes.object.isRequired,
}
export default ImageGalleryItem;