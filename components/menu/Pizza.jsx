import { useState, useEffect } from "react";
import Card from "../shared/Card";
import PizzaData from "../../data/PizzaData";

function Pizza() {
  const [view, setView] = useState("Our Specialty Pizza's");
  const [cost, setCost] = useState(0);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const specialtyPizza = PizzaData.SpecialtyPizza;
  const buildYourOwnPizza = PizzaData.BuildYourOwnPizza;
  const componentValue = (e, type) => {
    if (typeof type === "string") {
      return e.target.outerText;
    } else if (typeof type === "number") {
      console.log(e.target.attributes);
      return e.target.attributes.value.value;
    }
  };
  const selectComponent = (e, multi) => {
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

  const changeView = () => {
    if (view === "Build Your Own Pizza") {
      setView("Our Specialty Pizza's");
    } else {
      setView("Build Your Own Pizza");
    }
  };

  const selectSize = (e) => {
    setCost(0);
    setSize(componentValue(e, 1));
    setCrust("");
    setToppings([]);
    const chosen = Object.values(document.getElementsByClassName("chosen"));
    chosen.forEach((e) => e.classList.remove("chosen"));
    selectComponent(e, false);
  };
  const selectCrust = (e) => {
    selectComponent(e, false);
    setCost(Number(componentValue(e, 1)));

    setCrust(componentValue(e, ""));
  };
  const selectTopping = (e) => {
    selectComponent(e, true);
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
    if (toppings[0]) {
      const costOfCrust =
        PizzaData.BuildYourOwnPizza.Crust[crust][
          Object.values(buildYourOwnPizza.Size).indexOf(size)
        ];
      console.log(costOfCrust);
      const pricePerTopping =
        buildYourOwnPizza.Toppings.Price.Full[
          buildYourOwnPizza.Size.indexOf(size)
        ];
      const costOfToppings = toppings.length * pricePerTopping;

      setCost((curr) => curr + costOfToppings);
    }
  }, [crust, toppings]);

  if (view === "Our Specialty Pizza's") {
    return (
      <div className="pizza">
        <button className="pizza_toggle" onClick={changeView}>
          {view}
        </button>

        <div className="menu_header row">
          <h1>Build Your Own Pizza</h1>
          <h1>{`$ ${cost.toFixed(2)}`}</h1>
        </div>
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
          <h2 className="selected">{`${size}`}</h2>
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

          <h2 className="selected">{`${crust}`}</h2>
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
          <div className="selected">
            {toppings.map((topping) => {
              return <p>{`${topping}`}</p>;
            })}
          </div>
        </div>
        <button className="clear_all" onClick={clearAllSelections}>
          Clear
        </button>
      </div>
    );
  } else {
    return (
      <div className="Pizza">
        <button className="pizza_toggle" onClick={changeView}>
          {view}
        </button>
        <h1>Our Specialty Pizza's</h1>
      </div>
    );
  }
}

export default Pizza;
