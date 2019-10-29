import React from "react";
import classes from "./Control.css";

const control = props => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button className={classes.Less} onClick={props.removeHandler}>Less</button>
    <button className={classes.More} onClick={props.addHandler}>More</button>
  </div>
);

export default control;
