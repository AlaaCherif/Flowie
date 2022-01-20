import React from 'react';
import classes from './button.module.css';

export default function Button(props) {
  return (
    <button className={classes[`button-${props.type}`]}>{props.text}</button>
  );
}
