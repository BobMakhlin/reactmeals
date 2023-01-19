import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default CartButton;
