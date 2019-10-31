import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = ({menuClick, ...props }) => (
  <header className={classes.Toolbar}>
    <div onClick={menuClick} className={classes.DrawerToggle}>
        <div/>
        <div/>
        <div/>
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav  className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
