import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export default class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerToggleHandler = () => {
    this.setState((prev) => ({showSideDrawer: !prev.showSideDrawer}));
  };

  render() {
    return (
      <Aux>
        <Toolbar menuClick={this.sideDrawerToggleHandler}/>
        <SideDrawer
          className={classes.HideSmallScreen}
          show={this.state.showSideDrawer}
          hide={this.sideDrawerToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
