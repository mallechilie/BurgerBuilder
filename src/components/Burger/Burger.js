import React from "react"
import classes from "./Burger.css"
import Ingredient from "./Ingredients/Ingredients";

const burger = props => {
    return (
        <div className={classes.Burger}>
            <p>burger</p>
            <Ingredient type="bread-top" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default burger;