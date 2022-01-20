import React from 'react';
import GalleryItem from './GalleryItem';
import classes from './gallery.module.css';
import gallery_1 from '../../images/gallery_1.jpeg';
import gallery_2 from '../../images/gallery_2.jpg';
import gallery_3 from '../../images/gallery_3.jpg';

export default function Gallery() {
  return (
    <div className={classes.flex}>
      <GalleryItem description='WHO WE ARE?' src={gallery_1} />
      <GalleryItem description='HOW WE WORK?' src={gallery_2} />
      <GalleryItem description='ABOUT OUR PRODUCTS' src={gallery_3} />
    </div>
  );
}
