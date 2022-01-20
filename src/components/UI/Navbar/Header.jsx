import React from 'react';
import classes from './navbar.module.css';

export default function Navbar() {
  return (
    <ul className={classes.navbar}>
      <div>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            LOG IN
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            REGISTER
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            ACCOUNT
          </a>
        </li>
      </div>
      <div className={classes.secondary}>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            FAQ
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            SUPPORT
          </a>
        </li>
        <li className={classes['nav-item']}>
          <a className={classes.link} href='/'>
            REPORT
          </a>
        </li>
      </div>
    </ul>
  );
}
