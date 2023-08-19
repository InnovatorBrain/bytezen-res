import React from 'react';
import './Gallery.css';

const Gallery = ({ image, text, title }) => {
  return (

    <div className="image-section">
      <img src={image} alt="Gallery-Visual" className='Gallery-Image' />
      <p className='gallery-image-text'>{text}</p>
      <h2 className='gallery-image-title'>{title}</h2>
    </div>

  );
};

export default Gallery;
