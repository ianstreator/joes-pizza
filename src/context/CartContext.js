import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const Provider = ({ children }) => {
  const item = { itemName: "", itemCost: 0 };
  const [items, setItems] = useState([item]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(items.reduce((itemA, itemB) => itemA + itemB, 0));
  }, [items]);

  return (
    <CartContext.Provider value={{ total, items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
