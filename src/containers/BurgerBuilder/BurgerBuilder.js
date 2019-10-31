import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 1
    },
    price: 4,
    purchasable: true,
    purchasing: false
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continue!");
  };

  isPurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((total, value) => total + value);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldCount + 1;
    const newPrice = this.state.price + INGREDIENT_PRICES[type];

    this.setState({ ingredients: updatedIngredients, price: newPrice });
    this.isPurchasable(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount !== 0) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = oldCount - 1;
      const newPrice = this.state.price - INGREDIENT_PRICES[type];

      this.setState({ ingredients: updatedIngredients, price: newPrice });
      this.isPurchasable(updatedIngredients);
    }
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          hideModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            cancel={this.purchaseCancelHandler}
            order={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
          price={this.state.price}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
