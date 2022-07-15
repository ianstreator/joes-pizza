import { useState, useEffect } from "react";
import Card from "../shared/Card";
import PizzaData from "../../data/PizzaData";

function Pizza() {
  const [view, setView] = useState("View Specialty Pizza's");
  const [cost, setCost] = useState(0.0);
  const [size, setSize] = useState(false);
  const [crust, setCrust] = useState(false);
  const [toppings, setToppings] = useState([]);
  const specialtyPizza = PizzaData.specialtyPizza;
  const buildYourOwnPizza = PizzaData.BuildYourOwnPizza;
  const componentValue = (e) => {
    return e.target.attributes.value.value;
  };

  const changeView = () => {
    if (view === "Create Your Own Pizza") {
      setView("View Specialty Pizza's");
    } else {
      setView("Create Your Own Pizza");
    }
  };

  const selectSize = (e) => {
    setSize(componentValue(e));
    setCrust(false);
  };
  const selectCrust = (e) => {
    const newCost = cost + Number(componentValue(e));
    if (cost !== 0) {
      setCost((cost += newCost));
      return;
    }

    setCrust(e.target.outerText);
    setCost((cost += Number(componentValue(e))));
  };
  const selectTopping = (e) => {
    setToppings(componentValue(e));
  };

  const clearAllSelections = () => {
    setSize(false);
    setCrust(false);
    setToppings(false);
    setCost(0.0);
  };

  if (view === "View Specialty Pizza's") {
    return (
      <div className="pizza">
        <button onClick={changeView}>{view}</button>

        <div className="menu_header row">
          <h1>Pizza</h1>
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
              if (crustValue === null || size === false) {
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
            {Object.entries(buildYourOwnPizza.Toppings).map(
              (topping_category) => {
                return (
                  <>
                    <h3 key={Math.random()}> {topping_category[0]}</h3>

                    <div key={topping_category} className="topping_category">
                      {topping_category[1].map((topping) => {
                        return (
                          <Card
                            key={topping}
                            className={"option"}
                            onClick={selectTopping}
                            children={topping}
                            value={topping}
                          />
                        );
                      })}
                    </div>
                  </>
                );
              }
            )}
          </div>
          <h2 className="selected">{`${toppings}`}</h2>
        </div>
        <button className="clear_all" onClick={clearAllSelections}>
          Clear
        </button>
      </div>
    );
  } else {
    return (
      <div className="Pizza">
        <button onClick={changeView}>{view}</button>
        <h1>Specialty Pizza</h1>
      </div>
    );
  }
}

export default Pizza;
