// GalleryMain.js
import React from 'react';
import './Gallery.css';
import Gallery from './Gallery'; // Assuming you have a separate file for GalleryCard component
import GalleryData from '../../constants/GalleryData'; // Assuming you have a file named GalleryData.js

const GalleryMain = () => {
  const GalleryCards = GalleryData.map((item) => (
    <Gallery
      key={item.id}
      image={item.image}
      text={item.text}
      title={item.title}
    />
  ));

  return (
    <div className='galleryMain-container'>
      {GalleryCards}
    </div>
  );
};

export default GalleryMain;
