import { useState, React } from 'react';
import classes from './nav.module.css';
export default function Nav() {
  const [show, setshow] = useState(false);
  const navClass = `${classes['nav-item']} ${show ? classes.show : ''} `;
  const toggleShow = e => {
    e.preventDefault();
    setshow(state => {
      return !state;
    });
  };
  return (
    <ul className={classes.navbar}>
      <div className={navClass}>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            HOME
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            WOMEN
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            MEN
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            FEATURES
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            BLOG
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            <i className='fas fa-shopping-cart'></i>
          </a>
        </li>
        <li className={navClass}>
          <a className={classes.link} href='/'>
            <i className='fas fa-search'></i>
          </a>
        </li>
      </div>
      <li>
        <div className={classes.icon}>
          <a className={classes.link} href='/' onClick={toggleShow}>
            <i className={`far fa-caret-square-down `}></i>
          </a>
        </div>
      </li>
    </ul>
  );
}
