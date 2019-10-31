import image from "../../assets/images/burger-logo.png";
import React from "react";
import classes from "./Logo.css"

const logo = () => (
  <div style={{height: "100%"}}>
    <img className={classes.Logo} src={image} alt="hover-text"/>
  </div>
);

export default logo;

