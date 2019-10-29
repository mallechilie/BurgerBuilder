import React, { Component } from "react";
import classes from "./Ingredients.css";
import PropTypes from "prop-types";

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}>BREAD</div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            BREAD
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}>MEAT</div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}>BACON</div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}>CHEESE</div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}>SALAD</div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;
