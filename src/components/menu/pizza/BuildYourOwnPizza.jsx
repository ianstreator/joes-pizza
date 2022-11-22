import { useState, useEffect } from "react";
import PizzaData from "../../../data/PizzaData";
import clsx from "clsx";
import Image from "next/image";

function BuildYourOwnPizza() {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState(false);
  const [crust, setCrust] = useState(false);
  const [toppings, setToppings] = useState({});
  const [toppingsNav, setToppingsNav] = useState("Meat");
  const [pizza, setPizza] = useState({
    toppings,
    size,
    crust,
  });
  const sizeData = PizzaData.BuildYourOwnPizza.Sizes;
  const crustData = PizzaData.BuildYourOwnPizza.Crusts;
  const toppingsData = PizzaData.BuildYourOwnPizza.Toppings;

  const selectSize = (e) => {
    setSize(e);
    setCrust("");
  };
  const selectCrust = (e) => {
    setCrust(e);
  };
  const selectTopping = ({ name, position }) => {
    const updatedToppings = toppings;
    updatedToppings[name] === position
      ? delete updatedToppings[name]
      : (updatedToppings[name] = position);
    setToppings({ ...updatedToppings });
  };

  const clearAllSelections = () => {
    setSize("");
    setCrust("");
    setToppings({});
  };

  useEffect(() => {
    let costOfToppings = 0;
    let costOfCrust = crust[1] ? crust[1] : 0;
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
    console.log(pizza);
  }, [crust, toppings, size, toppingsData.Price]);

  const normalizeObjectKeyString = (obj) => {
    const key = Object.keys(obj)[0];
    const value = Object.values(obj)[0];
    if (key.includes("_")) {
      const splitKey = key.split("_");
      const key1 = splitKey[0].charAt(0).toUpperCase() + splitKey[0].slice(1);
      const key2 = splitKey[1].charAt(0).toUpperCase() + splitKey[1].slice(1);
      const normalizedKey = `${key1} ${key2} ${value}"`;
      return normalizedKey;
    }
    const normalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    return normalizedKey.concat(` ${value}"`);
  };

  return (
    <>
      <div className="build_your_own_pizza">
        <div>
          <div className={clsx("section", size && "na")}>
            <h4>Size</h4>
            {size && <p>- {normalizeObjectKeyString(size)}</p>}
          </div>
          <div className="options">
            {!size &&
              Object.entries(sizeData).map(([type, s], i) => {
                const abr = type.split("_");
                return (
                  <button
                    key={i}
                    className={clsx("option", s === size && "chosen")}
                    onClick={() => selectSize({ [type]: s })}
                    value={s}
                  >
                    {`${
                      abr.length > 1
                        ? `${abr[0][1] + abr[1][0]}`.toUpperCase() + ` ${s}"`
                        : abr[0][0].toUpperCase() + ` ${s}"`
                    }`}
                  </button>
                );
              })}
          </div>
        </div>
        <div>
          <div className={clsx("section", (!size || crust) && "na")}>
            <h4>Crust</h4>
            {!size && <p>- Select a size</p>}
            {crust && <p>- {crust[0]}</p>}
          </div>
          <div className="options">
            {size &&
              !crust &&
              Object.entries(crustData).map(([crustName, crustValues], i) => {
                const sizeName = Object.keys(size)[0];
                const crustValue = crustValues[sizeName];
                if (crustData[crustName][sizeName]) {
                  return (
                    <button
                      key={i}
                      className="option"
                      onClick={() => selectCrust([crustName, crustValue])}
                    >
                      {crustName}
                    </button>
                  );
                }
              })}
          </div>
        </div>
        <div>
          {<h4 className="section">Toppings</h4>}
          <div className="toppings_menu">
            <div className="toppings">
              <div className="nav">
                <ul>
                  {Object.keys(toppingsData.Types).map((type, i) => (
                    <li key={i} onClick={() => setToppingsNav(type)}>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="toppings_header">
                <div className="options_container">
                  <div className="option">LEFT</div>
                  <div className="option">FULL</div>
                  <div className="option">RIGHT</div>
                </div>
              </div>

              {toppingsNav &&
                Object.values(toppingsData.Types[toppingsNav]).map(
                  (topping, i) => (
                    <div key={i} className="topping">
                      <p>{topping}</p>
                      <div className="button_container">
                        <button
                          className={clsx(
                            "topping_button",
                            toppings[topping] === "Left" && "active"
                          )}
                          onClick={() =>
                            selectTopping({
                              name: topping,
                              position: "Left",
                            })
                          }
                        ></button>
                        <button
                          className={clsx(
                            "topping_button",
                            toppings[topping] === "Full" && "active"
                          )}
                          onClick={() =>
                            selectTopping({
                              name: topping,
                              position: "Full",
                            })
                          }
                        ></button>
                        <button
                          className={clsx(
                            "topping_button",
                            toppings[topping] === "Right" && "active"
                          )}
                          onClick={() =>
                            selectTopping({
                              name: topping,
                              position: "Right",
                            })
                          }
                        ></button>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
        <div className="custom_pizza">
          Custom Pizza
          <button className="button">
            ${cost.toFixed(2)}
            <div className="icon_wrapper">
              <Image
                src="/add-to-cart-icon-dark.svg"
                width={20}
                height={20}
                alt="adjust_cart"
              ></Image>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default BuildYourOwnPizza;
