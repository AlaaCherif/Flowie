import React from 'react';
import Title from '../Title/Title';
import classes from './footer.module.css';
import Button from '../UI/Button/Button';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer-item']}>
        <p className={classes['footer-title']}>ABOUT US</p>
        <Title />
        <p>Nakhil City Block</p>
        <p>Khemais Tarnene ST 4051</p>
        <p>Sousse,Tunisia</p>
      </div>
      <div className={classes['footer-item']}>
        <p className={classes['footer-title']}>INFORMATION</p>
        <span>Portfolio</span>
        <span>Github Profile</span>
        <span>LinkedIn Profile</span>
      </div>
      <div className={classes['footer-item']}>
        <p className={classes['footer-title']}>SUBSCRIBE</p>
        <p>Subscribe To Newsletter</p>
        <p style={{ color: 'rgb(167, 167, 167)' }}>
          We will send you regular updates
        </p>
        <p style={{ color: 'rgb(167, 167, 167)' }}>and the best offers!</p>
        <input type='email' />
        <Button type='secondary' text='SUBSCRIBE' />
      </div>
    </footer>
  );
}
