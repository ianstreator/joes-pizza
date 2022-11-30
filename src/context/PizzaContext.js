import { createContext, useState, useEffect } from "react";
import PizzaData from "../data/PizzaData";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState(false);
  const [crust, setCrust] = useState(false);
  const [toppings, setToppings] = useState({});
  const [toppingsNav, setToppingsNav] = useState("Meat");
  const [pizza, setPizza] = useState({});
  

  const toppingsData = PizzaData.BuildYourOwnPizza.Toppings;

  const selectTopping = ({ name, position }) => {
    const updatedToppings = toppings;
    updatedToppings[name] === position
      ? delete updatedToppings[name]
      : (updatedToppings[name] = position);
    setToppings({ ...updatedToppings });
  };

  const selectSize = (size) => {
    setSize(size);
    setCrust(false);
  };

  const clearPizza = () => {
    setSize(false);
    setCrust(false);
    setToppings({});
    setPizza({});
    setCost(0);
  };

  useEffect(() => {
    if (!size) return;
    let costOfToppings = 0;
    const crustPrice = Object.values(crust)[0];
    let costOfCrust = crustPrice ? crustPrice : 0;
    const toppingsList = Object.values(toppings);
    if (toppingsList.length) {
      const currentToppingsCost = toppingsList.reduce((acc, curr) => {
        const pricingDependency = curr === "Full" ? "Full" : "Half";
        const sizeName = Object.keys(size)[0];
        return (acc += toppingsData.Price[pricingDependency][sizeName]);
      }, 0);
      costOfToppings = currentToppingsCost;
    }
    setCost(costOfCrust + costOfToppings);
    setPizza({
      size,
      crust,
      toppings,
      cost,
    });
  }, [crust, toppings, size]);

  return (
    <PizzaContext.Provider
      value={{
        cost,
        size,
        crust,
        setCrust,
        toppings,
        toppingsNav,
        setToppingsNav,
        selectTopping,
        selectSize,
        clearPizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
