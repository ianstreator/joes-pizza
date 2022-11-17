import { useState, useEffect } from "react";
import PizzaData from "../../../data/PizzaData";
import clsx from "clsx";

function BuildYourOwnPizza() {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState({});
  const sizeData = PizzaData.BuildYourOwnPizza.Size;
  const crustData = PizzaData.BuildYourOwnPizza.Crust;
  const toppingsData = PizzaData.BuildYourOwnPizza.Toppings;

  const selectSize = (e) => {
    setSize(e);
    setCrust("");
    setToppings({});
  };
  const selectCrust = (e) => {
    setCrust(e);
  };
  const selectTopping = (e) => {
    toppings[e] ? delete toppings[e] : (toppings[e] = true);
    setToppings({ ...toppings });
  };

  const clearAllSelections = () => {
    setSize("");
    setCrust("");
    setToppings({});
  };

  useEffect(() => {
    let costOfToppings = 0;
    let costOfCrust = 0;
    if (crust) {
      costOfCrust = crustData[crust][Object.values(sizeData).indexOf(size)];
    }
    const toppingsList = Object.keys(toppings);
    if (toppingsList.length) {
      const pricePerTopping = toppingsData.Price.Full[sizeData.indexOf(size)];
      costOfToppings = toppingsList.length * pricePerTopping;
    }
    setCost(costOfCrust + costOfToppings);
  }, [crust, toppings, size, crustData, sizeData, toppingsData.Price.Full]);

  return (
    <>
      <div className="pizza">
        <div className="receipt">
          <h1 className="title">{"Joe's Pizza"}</h1>

          <h5>{`Size & Crust`}</h5>
          <p>{`${size && size + '"'}`}</p>
          <p>{`${crust}`}</p>

          <div className="toppings_container">
            <h5>Toppings</h5>
            <div className="toppings">
              {Object.keys(toppings).map((topping) => {
                return (
                  <p key={topping} className="topping">
                    {topping}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="receipt_bottom">
            <h1 className="cost">{`$${cost.toFixed(2)}`}</h1>
            <h1 className="cost clear" onClick={clearAllSelections}>
              CLEAR
            </h1>
          </div>
        </div>
        <div className="scroll_options">
          <div className="container row">
            <h2 className="section">Size</h2>
            <div className="options">
              {Object.values(sizeData).map((s,i) => {
                return (
                  <div
                    key={s.toString()}
                    className={clsx("option", s === size && "chosen")}
                    onClick={() => selectSize(s)}
                    value={s}
                  >
                    {`${s}"`}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container row">
            <h2 className="section">Crust</h2>
            <div className={`options`}>
              {Object.entries(crustData).map(([crustName, crustValues]) => {
                const crustValue =
                  crustValues[Object.values(sizeData).indexOf(size)];
                const nullCheck = crustValue === null || size === "";
                const onClick = nullCheck ? null : () => selectCrust(crustName);
                return (
                  <div
                    key={crustName}
                    className={clsx(
                      "option",
                      nullCheck && "null",
                      crustName === crust && "chosen"
                    )}
                    onClick={onClick}
                  >
                    {crustName}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container row">
            <h2 className="section">Toppings</h2>
            <div className="options toppings">
              {Object.entries(toppingsData.Types).map(([category, topping]) => {
                return (
                  <div key={category}>
                    <h3> {category}</h3>
                    <div className="topping_category">
                      {topping.map((topping) => {
                        const nullCheck = crust === "";
                        const onClick = nullCheck
                          ? null
                          : () => selectTopping(`${topping}`);
                        return (
                          <div
                            key={topping}
                            className={clsx(
                              "option",
                              nullCheck && "null",
                              toppings[topping] && "chosen"
                            )}
                            onClick={onClick}
                          >
                            {topping}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="fade" id="fade"></div>
    </>
  );
}

export default BuildYourOwnPizza;
