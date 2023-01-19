import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <div className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => cartCtx.incrementItemAmount(item.id)}
          onRemove={() => cartCtx.removeItem(item.id)}
        >
          {item.name}
        </CartItem>
      ))}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default CartModal;
