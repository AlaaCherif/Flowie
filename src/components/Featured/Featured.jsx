import React from 'react';
import { useState } from 'react';
import classes from './featured.module.css';
import FeaturedItem from './FeaturedItem/FeaturedItem';

export default function Featured() {
  const [active, setActive] = useState('1');
  const [animationClass, setAnimationClass] = useState(`${classes.main}`);
  const animateMain = () => {
    setAnimationClass(`${classes.main} ${classes.animate}`);
    setTimeout(() => {
      setAnimationClass(`${classes.main}`);
    }, 500);
  };
  const handleFirst = e => {
    setActive('1');
    animateMain();
  };
  const handleSecond = e => {
    setActive('2');
    animateMain();
  };
  const handleThird = e => {
    setActive('3');
    animateMain();
  };
  const firstTab = (
    <>
      <div className={classes.inner}>
        <FeaturedItem new='true' />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
      <img
        src='https://images.unsplash.com/photo-1623244307563-f9ade3df13c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbGlzbW98ZW58MHx8MHx8&w=1000&q=80'
        alt='TARMA'
        height='800'
        width='400'
      />
    </>
  );
  const secondTab = (
    <div className={classes['second-container']}>
      <img
        src='https://c.stocksy.com/a/l28800/z9/1937547.jpg'
        alt='Workspace'
      />
      <span>Discover our workspace collection</span>
    </div>
  );
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>FEATURED ITEMS</h1>
      <div className={classes.links}>
        <span
          className={active === '1' ? classes.active : {}}
          onClick={handleFirst}
        >
          HOME DECOR
        </span>
        <span
          className={active === '2' ? classes.active : {}}
          onClick={handleSecond}
        >
          WORKSPACE
        </span>
        <span
          className={active === '3' ? classes.active : {}}
          onClick={handleThird}
        >
          OUTDOOR
        </span>
      </div>
      <div className={animationClass}>
        {active === '1' ? firstTab : <></>}
        {active === '2' ? secondTab : <></>}
        {active === '3' ? <p>fok zebi aad </p> : <></>}
      </div>
    </div>
  );
}
