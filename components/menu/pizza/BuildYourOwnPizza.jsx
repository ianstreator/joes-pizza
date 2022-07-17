import { useState, useEffect } from "react";
import PizzaData from "../../../data/PizzaData";
import Card from "../../shared/Card";

function BuildYourOwnPizza() {
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const buildYourOwnPizza = PizzaData.BuildYourOwnPizza;

  const componentValue = (e, type) => {
    if (typeof type === "string") {
      return e.target.outerText;
    } else if (typeof type === "number") {
      return e.target.attributes.value.value;
    }
  };
  //....highlight and un-highlight category items...
  const highlightComponent = (e, multi) => {
    if (!multi) {
      Object.values(e.nativeEvent.path[1].children).forEach((e) => {
        e.classList.remove("chosen");
      });
      e.target.classList.add("chosen");
    } else {
      if (e.target.classList.value.includes("chosen")) {
        e.target.classList.remove("chosen");
      } else {
        e.target.classList.add("chosen");
      }
    }
  };

  const selectSize = (e) => {
    setCost(0);
    setSize(componentValue(e, 1));
    setCrust("");
    setToppings([]);
    const chosen = Object.values(document.getElementsByClassName("chosen"));
    chosen.forEach((e) => e.classList.remove("chosen"));
    highlightComponent(e, false);
  };
  const selectCrust = (e) => {
    highlightComponent(e, false);
    setCrust(componentValue(e, ""));
  };
  const selectTopping = (e) => {
    highlightComponent(e, true);
    if (toppings.includes(componentValue(e, ""))) {
      setToppings((curr) => [
        ...curr.filter((topping) => topping !== componentValue(e, "")),
      ]);
    } else {
      setToppings((curr) => [...curr, componentValue(e, "")]);
    }
  };

  const clearAllSelections = () => {
    setSize("");
    setCrust("");
    setToppings([]);
    setCost(0);
    const chosen = Object.values(document.getElementsByClassName("chosen"));
    chosen.forEach((e) => e.classList.remove("chosen"));
  };

  useEffect(() => {
    let costOfToppings;
    let costOfCrust;
    if (crust) {
      costOfCrust =
        PizzaData.BuildYourOwnPizza.Crust[crust][
          Object.values(buildYourOwnPizza.Size).indexOf(size)
        ];
      setCost(Number(costOfCrust));
    }
    if (toppings.length) {
      const pricePerTopping =
        buildYourOwnPizza.Toppings.Price.Full[
          buildYourOwnPizza.Size.indexOf(size)
        ];
      costOfToppings = toppings.length * pricePerTopping;
      setCost(costOfCrust + costOfToppings);
    }
  }, [crust, toppings]);
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
              return <p className="topping">{topping}</p>;
            })}
          </div>
        </div>

        <h1 className="cost">{`$${cost.toFixed(2)}`}</h1>
      </div>

      <div className="scroll_options">
        <div className="container row">
          <h2 className="section">Size</h2>
          <div className="options">
            {Object.values(buildYourOwnPizza.Size).map((size) => {
              return (
                <Card
                  key={size}
                  className={"option"}
                  onClick={selectSize}
                  children={size}
                  value={size}
                />
              );
            })}
          </div>
        </div>
        <div className="container row">
          <h2 className="section">Crust</h2>
          <div className={`options`}>
            {Object.entries(buildYourOwnPizza.Crust).map((crust) => {
              const crustValue =
                crust[1][Object.values(buildYourOwnPizza.Size).indexOf(size)];
              if (crustValue === null || size === "") {
                return (
                  <Card
                    key={crust[0]}
                    className={"option null"}
                    onClick={null}
                    children={crust[0]}
                    value={crustValue}
                  />
                );
              } else {
                return (
                  <Card
                    key={crust[0]}
                    className={"option"}
                    onClick={selectCrust}
                    children={crust[0]}
                    value={crustValue}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="container row">
          <h2 className="section">Toppings</h2>
          <div className="options toppings">
            {Object.entries(buildYourOwnPizza.Toppings.Types).map(
              (topping_category) => {
                return (
                  <>
                    <h3 key={Math.random()}> {topping_category[0]}</h3>

                    <div key={topping_category} className="topping_category">
                      {topping_category[1].map((topping) => {
                        if (crust === "") {
                          return (
                            <Card
                              key={topping}
                              className={"option null"}
                              onClick={null}
                              children={topping}
                              value={topping}
                            />
                          );
                        } else {
                          return (
                            <Card
                              key={topping}
                              className={"option"}
                              onClick={selectTopping}
                              children={topping}
                              value={topping}
                            />
                          );
                        }
                      })}
                    </div>
                  </>
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
