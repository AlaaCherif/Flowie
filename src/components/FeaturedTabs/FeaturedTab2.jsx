import React from 'react';
import classes from '../Featured/featured.module.css';
import desk from '../../assets/desk.jpg';
import AnimatedTab from '../AnimatedTab';

export default function FeaturedTab2() {
  return (
    <AnimatedTab>
      <div className={classes['second-container']}>
        <img src={desk} alt='Workspace' />
        <span>Discover our workspace collection</span>
      </div>
    </AnimatedTab>
  );
}
