import { useCallback, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css";
import Checkout from "./Checkout";

const CartModal = (props) => {
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleOrderClick = useCallback(() => {
    setIsCheckoutMode(true);
  }, []);
  const handleCheckoutFormSubmit = (values) => {
    console.log('values:', values);
  };

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
  const actions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={handleOrderClick}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      {isCheckoutMode && (
        <Checkout
          onCancel={props.onClose}
          onSubmit={handleCheckoutFormSubmit}
        />
      )}
      {!isCheckoutMode && actions}
    </Modal>
  );
};

export default CartModal;
