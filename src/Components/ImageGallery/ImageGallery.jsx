import React from 'react';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imgArr, children }) => {
    // console.log(imgArr);
    return (

        <ul className={s.imageGallary}>
            {imgArr.map((imgItem) =>
                <li className={s.imageGalleryItem} key={imgItem.id} >
                    <img src={imgItem.webformatURL} alt={imgItem.tags} className={s.ImageGalleryItemimage} />
                </li>)}

        </ul>
    )
}

export default ImageGallery;