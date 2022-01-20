import React from 'react';
import classes from './slide.module.css';
import Button from '../UI/Button/Button';

export default function Slide() {
  return (
    <div className={classes.slide}>
      <p className={classes.title}>Flowers</p>
      <p className={classes.title}>From The Heart</p>
      <p style={{ color: 'white', letterSpacing: '5px' }}>
        GIVE LOVE TO YOUR HOME
      </p>
      <div className={classes.buttons}>
        <Button text='VIEW PRODUCTS' type='primary' />
        <Button text='SEE ALL' type='secondary' />
      </div>
    </div>
  );
}
