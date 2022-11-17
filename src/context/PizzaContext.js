import { createContext, useState, useEffect } from "react";

const PizzaContext = createContext();

export const Provider = ({ children }) => {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState({});

  return (
    <PizzaContext.Provider
      value={{
        cost,
        size,
        setSize,
        crust,
        setCrust,
        toppings,
        setToppings,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
