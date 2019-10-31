import React from "react";
import classes from "./Backdrop.css";

const backdrop = ({ show, onClick, ...props }) =>
  show ? <div className={[classes.Backdrop]} onClick={onClick}></div> : null;

export default backdrop;
