import React from 'react';
import Button from '../../UI/Button/Button';
import GalleryItem from '../../Welcome/GalleryItem';
import classes from './featureditem.module.css';
import cactus from '../../../images/cactus.jpg';

export default function FeaturedItem(props) {
  return (
    <div className={classes['item-container']}>
      <GalleryItem
        new={props.new}
        description='This is a really good description!'
        src={cactus}
      />
      <Button text='ADD TO CART' type='cart' />
    </div>
  );
}
