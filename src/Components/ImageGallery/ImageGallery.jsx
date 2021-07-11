import React from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ imgArr, children, onSelect }) {

    return (

        <ul className={s.imageGallary}>
            {imgArr.map((imgItem) =>
                <li className={s.imageGalleryItem} key={imgItem.id} onClick={() => onSelect(imgItem)} >
                    <img src={imgItem.webformatURL} alt={imgItem.tags} className={s.ImageGalleryItemimage} />
                </li>)
            }

        </ul >
    )
}
ImageGallery.prototype = {
    imgArr: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default ImageGallery;