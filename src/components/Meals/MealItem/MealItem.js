import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, price, name, description }) => {
  const cartCtx = useContext(CartContext);

  const handleFormSubmit = (event) => {
    cartCtx.addItem({ id, price, name, description, amount: event.amount });
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default MealItem;
