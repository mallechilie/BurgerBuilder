import React from "react";
import classes from "./Burger.css";
import Ingredient from "./Ingredients/Ingredients";

const burger = props => {
  let ingredients;
  ingredients = Object.keys(props.ingredients)
    .map(key => {
      //  Insert array
      return [...Array(props.ingredients[key])].map((_, i) => (
        <Ingredient key={key + i} type={key} />
      ));
    })
    .reduce((arr, el) => arr.concat(el));

  if (ingredients.length === 0) {
    ingredients = (
      <div>
        <p>Do you like plain bread this much?</p>
        <p>We try our best :(</p>
      </div>
    );
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
