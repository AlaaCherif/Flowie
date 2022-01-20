import React from 'react';
import Gallery from './Gallery';
import classes from './welcome.module.css';

export default function Welcome() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>WELCOME TO FLOWIE GARDEN</h1>
      <p className={classes.paragraph}>
        Get to know us more: know our products ,our policies and how do we work!
      </p>
      <p className={classes.paragraph}>Enjoy!</p>
      <Gallery />
    </div>
  );
}
