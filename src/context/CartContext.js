import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState({});
  const [total, setTotal] = useState(0);
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    setTotal(Object.values(items).reduce((itemA, itemB) => itemA + itemB, 0));
  }, [items]);

  const addItem = ({ itemName, itemPrice }) => {
    if (items[itemName]) return;
    if (itemPrice.length) console.log("multi option")
    setItems((currItems) => ({ ...currItems, [itemName]: itemPrice }));
    setTotal((currTotal) => (currTotal += itemPrice));
  };

  return (
    <CartContext.Provider
      value={{ total, items, setItems, setCartView, cartView, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
