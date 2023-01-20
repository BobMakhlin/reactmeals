import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../store/cart-context";

const ANIMATION_DURATION = 300;

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (cartCtx.totalAmount === 0) {
      return;
    }

    setIsAnimated(true);
    const timerId = setTimeout(() => {
      setIsAnimated(false);
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(timerId);
    }
  }, [cartCtx.totalAmount]);

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${isAnimated ? classes.bump : ""}`}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default CartButton;
