import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState({});
  const [total, setTotal] = useState(0);
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    setTotal(Object.values(items).reduce((itemA, itemB) => itemA + itemB, 0));
  }, [items]);

  const addItem = ({ itemName, itemCost }) => {
    console.log(itemName, itemCost)
    setItems((currItems) => ({ ...currItems, [itemName]: itemCost }));
    setTotal((currTotal) => (currTotal += itemCost));
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
