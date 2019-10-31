import React from "react";
import classes from "./BuildControls.css";
import classes1 from "./button.css";
import Control from "./Control/Control";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = ({ingredientRemoved, ingredientAdded, price, purchasable, purchasing, ...props}) => (
    <div>
        <p>
            The current price is <strong>{price.toFixed(2)}</strong>
        </p>
        <div className={classes.BuildControls}>
            {controls.map(c => (
                <Control
                    key={c.label}
                    label={c.label}
                    addHandler={() => ingredientAdded(c.type)}
                    removeHandler={() => ingredientRemoved(c.type)}
                />
            ))}
            <button className={classes1.OrderButton} disabled={!purchasable} onClick={purchasing}>Purrrchase</button>
        </div>
    </div>
);

export default buildControls;
