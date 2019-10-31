import React from "react";
import classes from "./Button.css";

const button = ({ buttonType, onClick, ...props }) => (
  <button
    className={[classes.Button, classes[buttonType]].join(" ")}
    onClick={onClick}
  >
    {props.children}
  </button>
);

export default button;
