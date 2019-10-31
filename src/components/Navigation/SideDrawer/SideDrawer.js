import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = ({ show, hide, className, ...props }) => {
  let classesVar;
  if (show) classesVar = [classes.SideDrawer, classes.Open];
  else classesVar = [classes.SideDrawer, classes.Close];
  return (
    <div className={className}>
      <Backdrop show={show} onClick={hide} />
      <div className={classesVar.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
