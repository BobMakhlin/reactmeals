import React, { useCallback, useEffect, useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: (item) => {
    // By default is an empty dummy function.
  },
  removeItem: (id) => {
    // By default is an empty dummy function.
  },
  incrementItemAmount: (id) => {
    // By default is an empty dummy function.
  },
  clear: () => {
    // By default is an empty dummy function.
  },
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    let items;
    const index = state.items.findIndex((x) => x.id === action.item.id);

    if (index === -1) {
      items = [...state.items, action.item];
    } else {
      items = [...state.items];
      const existingItem = { ...items[index] };
      existingItem.amount += action.item.amount;
      items[index] = existingItem;
    }

    return {
      items,
      totalAmount: state.totalAmount + action.item.amount,
      totalPrice: state.totalPrice + action.item.price * action.item.amount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let items;
    const index = state.items.findIndex((x) => x.id === action.id);
    const item = state.items[index];

    if (item.amount <= 1) {
      items = state.items.filter((x) => x !== item);
    } else {
      items = [...state.items];
      const copy = { ...item };
      copy.amount--;
      items[index] = copy;
    }

    return {
      items,
      totalAmount: state.totalAmount - 1,
      totalPrice: state.totalPrice - item.price,
    };
  }

  if (action.type === "INCREMENT_AMOUNT") {
    const index = state.items.findIndex((x) => x.id === action.id);

    const items = [...state.items];
    const copy = { ...items[index] };
    copy.amount++;
    items[index] = copy;

    return {
      items,
      totalAmount: state.totalAmount + 1,
      totalPrice: state.totalPrice + copy.price,
    };
  }

  if (action.type === "CLEAR") {
    return { ...defaultCartState };
  }

  throw new Error(`Unsupported action ${action.type}`);
}

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = useCallback((item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }, []);
  const removeItem = useCallback((id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }, []);
  const incrementItemAmount = useCallback((id) => {
    dispatchCartAction({ type: "INCREMENT_AMOUNT", id });
  }, []);
  const clear = useCallback(() => {
    dispatchCartAction({ type: "CLEAR" });
  }, []);

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem,
    removeItem,
    incrementItemAmount,
    clear,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
