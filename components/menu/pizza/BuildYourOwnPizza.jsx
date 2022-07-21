import { useState, useEffect } from "react";
import clsx from 'clsx';
import PizzaData from "../../../data/PizzaData";
import Card from "../../shared/Card";

function BuildYourOwnPizza() {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);

  const selectSize = (size) => {
    setSize(size);
    setCrust("");
    setToppings([]);
  };
  const selectCrust = (crust) => {
    setCrust(crust);
  };
  const selectTopping = (topping) => {
    setToppings(curr => curr.includes(topping) ? curr.filter(t => t !== topping) : [...curr, topping]);
  };

  const clearAllSelections = () => {
    setSize("");
    setCrust("");
    setToppings([]);
  };

  useEffect(() => {
    let costOfToppings = 0;
    let costOfCrust = 0;
    if (crust) {
      costOfCrust =
        PizzaData.BuildYourOwnPizza.Crust[crust][
          Object.values(PizzaData.BuildYourOwnPizza.Size).indexOf(size)
        ];
    }
    if (toppings.length) {
      const pricePerTopping =
        PizzaData.BuildYourOwnPizza.Toppings.Price.Full[
          PizzaData.BuildYourOwnPizza.Size.indexOf(size)
        ];
      costOfToppings = toppings.length * pricePerTopping;
    }

    setCost(costOfCrust + costOfToppings);
  }, [crust, toppings, size]);

  return (
    <div className="pizza">
      <div className="receipt">
        <h1 className="title">{"Joe's Pizza"}</h1>

        <h5>{`Size & Crust`}</h5>
        <p>{`${size} ${crust}`}</p>
        <div className="toppings_container">
          <h5>Toppings</h5>
          <div className="toppings">
            {toppings.map((topping) => {
              return (
                <p key={topping} className={clsx("topping", toppings.includes(topping) && "chosen")}>
                  {topping}
                </p>
              );
            })}
          </div>
        </div>

        <h1 className="cost">{`$${cost.toFixed(2)}`}</h1>
      </div>

      <div className="scroll_options">
        <div className="container row">
          <h2 className="section">Size</h2>
          <div className="options">
            {Object.values(PizzaData.BuildYourOwnPizza.Size).map((s) => {
              return (
                <Card
                  key={s}
                  className={clsx("option", size === s && "chosen")}
                  onClick={() => selectSize(s)}
                  value={s}
                >
                  {s}
                </Card>
              );
            })}
          </div>
        </div>
        <div className="container row">
          <h2 className="section">Crust</h2>
          <div className={`options`}>
            {Object.entries(PizzaData.BuildYourOwnPizza.Crust).map(([crustName, value]) => {
              const crustValue =
                value[Object.values(PizzaData.BuildYourOwnPizza.Size).indexOf(size)];
              if (crustValue === null || size === "") {
                return (
                  <Card
                    key={crustName}
                    className={clsx("option", "null")}
                    onClick={null}
                  >
                    {crustName}
                  </Card>
                );
              } else {
                return (
                  <Card
                    key={crustName}
                    className={clsx("option", crust === crustName && "chosen")}
                    onClick={() => selectCrust(crustName)}
                  >
                    {crustName}
                  </Card>
                );
              }
            })}
          </div>
        </div>
        <div className="container row">
          <h2 className="section">Toppings</h2>
          <div className="options toppings">
            {Object.entries(PizzaData.BuildYourOwnPizza.Toppings.Types).map(
              (topping_category) => {
                return (
                  <div key={topping_category}>
                    <h3 key={Math.random()}> {topping_category[0]}</h3>

                    <div className="topping_category">
                      {topping_category[1].map((topping) => {
                        if (crust === "") {
                          return (
                            <Card
                              key={topping}
                              className={"option null"}
                              onClick={null}
                            >
                              {topping}
                            </Card>
                          );
                        } else {
                          return (
                            <Card
                              key={topping}
                              className={clsx("option", toppings.includes(topping) && "chosen")}
                              onClick={() => selectTopping(topping)}
                            >
                              {topping}
                            </Card>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <button className="clear_all" onClick={clearAllSelections}>
        Clear
      </button>
    </div>
  );
}

export default BuildYourOwnPizza;
