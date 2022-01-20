import React from 'react';
import FeaturedItem from '../Featured/FeaturedItem/FeaturedItem';
import classes from '../Featured/featured.module.css';
import featured from '../../assets/featured.jpeg';
import AnimatedTab from '../AnimatedTab';

export default function FeaturedTab1() {
  return (
    <AnimatedTab>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <FeaturedItem new='true' />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
        </div>
        <img src={featured} alt='TARMA' height='800' width='400' />
      </div>
    </AnimatedTab>
  );
}
