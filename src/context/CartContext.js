import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState({});
  const [total, setTotal] = useState(0);
  const [cartView, setCartView] = useState(false);
  const [customPizzaNumber, setCustomPizzaNumber] = useState(1);

  useEffect(() => {
    setTotal(Object.values(items).reduce((itemA, itemB) => itemA + itemB, 0));
  }, [items]);

  const addItem = ({ itemName, itemPrice }) => {
    if (itemPrice.length) return console.log("multi option");
    setItems((currItems) => ({ ...currItems, [itemName]: itemPrice }));
  };
  const removeItem = (itemName) => {
    setItems((currItems) => {
      const updatedItems = { ...currItems };
      delete updatedItems[itemName];
      return updatedItems;
    });
  };

  const adjustCart = ({ itemName, itemPrice }) => {
    if (items.hasOwnProperty(itemName)) {
      removeItem(itemName);
      return;
    }
    addItem({ itemName, itemPrice });
  };

  return (
    <CartContext.Provider
      value={{
        total,
        items,
        setItems,
        setCartView,
        cartView,
        adjustCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
