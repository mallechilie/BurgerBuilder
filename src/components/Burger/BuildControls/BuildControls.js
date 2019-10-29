import React from "react";
import classes from "./BuildControls.css";
import Control from "./Control/Control";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div>
    <p>The current price is <strong>{props.price.toFixed(2)}</strong></p>
    <div className={classes.buildControls}>
      {controls.map(c => (
        <Control
          key={c.label}
          label={c.label}
          addHandler={() => props.ingredientAdded(c.type)}
          removeHandler={() => props.ingredientRemoved(c.type)}
        />
      ))}
    </div>
  </div>
);

export default buildControls;
