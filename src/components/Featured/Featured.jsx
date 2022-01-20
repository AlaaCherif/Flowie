import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import FeaturedTab1 from '../FeaturedTabs/FeaturedTab1';
import FeaturedTab2 from '../FeaturedTabs/FeaturedTab2';
import classes from './featured.module.css';

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
      <AnimatePresence>
        <div key='hi' className={animationClass}>
          {active === '1' ? <FeaturedTab1 /> : <></>}
          {active === '2' ? <FeaturedTab2 /> : <></>}
          {active === '3' ? <p>fok zebi aad </p> : <></>}
        </div>
      </AnimatePresence>
    </div>
  );
}
