import React from "react";
import classes from "./NavigationItem.css";

const navigationItem = ({ link, active, ...props }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
