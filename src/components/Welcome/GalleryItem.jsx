import React from 'react';
import { useState } from 'react/cjs/react.development';
import classes from './galleryitem.module.css';
import { ReactComponent as Mysvg } from '../../assets/images/new.svg';

export default function GalleryItem(props) {
  const [hovered, sethovered] = useState(false);
  const hoveredClass = `${classes.desc} ${hovered ? classes.hover : ''}`;
  const handleHover = () => {
    sethovered(true);
  };
  const handleUnhover = () => {
    sethovered(false);
  };
  return (
    <div
      className={classes.gallery}
      onMouseOver={handleHover}
      onMouseLeave={handleUnhover}
    >
      <img src={props.src} alt='Cinque Terre' />
      <a href='/'>
        {props.new ? (
          <span className={classes.new}>
            <Mysvg />
          </span>
        ) : (
          <></>
        )}
      </a>
      <div className={hoveredClass}>{props.description} </div>
    </div>
  );
}
