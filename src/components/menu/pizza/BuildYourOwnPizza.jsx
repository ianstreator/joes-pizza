import { useState, useEffect, useContext } from "react";
import PizzaData from "../../../data/PizzaData";
import clsx from "clsx";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

import CartContext from "../../../context/CartContext";
import PizzaContext from "../../../context/PizzaContext";

function BuildYourOwnPizza() {
  const { adjustCart, items } = useContext(CartContext);
  const {
    cost,
    size,
    crust,
    setCrust,
    toppings,
    toppingsNav,
    setToppingsNav,
    selectSize,
    selectTopping,
    clearPizza,
    pizzaNumber,
    setPizzaNumber,
  } = useContext(PizzaContext);

  const sizeData = PizzaData.BuildYourOwnPizza.Sizes;
  const crustData = PizzaData.BuildYourOwnPizza.Crusts;
  const toppingsData = PizzaData.BuildYourOwnPizza.Toppings;

  return (
    <>
      <div className="build_your_own_pizza">
        <div>
          <div className="section na">
            <h4>Size</h4>
            {size && <p>- {Object.keys(size)[0]}</p>}
          </div>
          <div className="options">
            {Object.entries(sizeData).map(([name, inches], i) => {
              return (
                <button
                  key={i}
                  className={clsx(
                    "option",
                    inches === Object.values(size)[0] && "active"
                  )}
                  onClick={() => selectSize({ [name]: inches })}
                  value={inches}
                >
                  {inches + '"'}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className="section na">
            <h4>Crust</h4>
            {!size && <p>- Select a size</p>}
            {size && !crust && (
              <p>
                -{" ("}
                {
                  Object.values(crustData).filter(
                    (obj) => obj[Object.keys(size)[0]]
                  ).length
                }
                {") "}
                options
              </p>
            )}
            {crust && <p>- {Object.keys(crust)[0]}</p>}
          </div>
          <div className="options">
            {Object.entries(crustData).map(([crustName, crustValues], i) => {
              const sizeName = Object.keys(size)[0];
              const crustValue = crustValues[sizeName];
              if (crustData[crustName][sizeName]) {
                return (
                  <button
                    key={i}
                    className={clsx(
                      "option",
                      crustName === Object.keys(crust)[0] && "active"
                    )}
                    onClick={() => setCrust({ [crustName]: crustValue })}
                  >
                    {crustName}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div>
          <div className="section na">
            <h4>Toppings</h4>
            {!size && <p>- Select a size</p>}
          </div>
          {size && (
            <div className="toppings_menu">
              <div className="toppings">
                <div className="nav">
                  <ul>
                    {Object.keys(toppingsData.Types).map((type, i) => (
                      <li
                        key={i}
                        className={clsx(toppingsNav === type && "active")}
                        onClick={() => setToppingsNav(type)}
                      >
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
          )}
        </div>
        <div className="custom_pizza">
          Custom Pizza
          {size && (
            <button
              style={{
                backgroundColor: "hsl(360,30%,40%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: ".5rem",
              }}
              onClick={() => clearPizza()}
            >
              <AiOutlineDelete size={17} />
            </button>
          )}
          <button
            className="button"
            onClick={() => {
              if (!crust) return;
              adjustCart({
                itemName: `${Object.values(size)[0]}" Custom Pizza`,
                itemPrice: cost,
              });
              clearPizza();
            }}
          >
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
