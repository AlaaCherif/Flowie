import React from "react";
import classes from "./card.module.css";

export default function Card(props) {
  return (
    <div className={classes.flex}>
      <div className={classes.card}>
        <h1 style={{ color: "white", textAlign: "center" }}>{props.title}</h1>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}
