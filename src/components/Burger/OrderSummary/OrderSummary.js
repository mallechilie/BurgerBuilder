import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = ({ ingredients, order, cancel, price, ...props }) => {
  const ingredienstSummary = Object.keys(ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: "capitalize" }}>{key}</span>: {ingredients[key]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>Burger by yours truly with:</p>
      <ul>{ingredienstSummary}</ul>
        <p><strong>Your price: {price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
        <Button buttonType={"Success"} onClick={order}>Continue</Button>
        <Button buttonType={"Danger"} onClick={cancel}>Cancel</Button>
    </Aux>
  );
};

export default orderSummary;
