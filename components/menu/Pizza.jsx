import { useState, useEffect } from "react";
import Card from "../shared/Card";
import PizzaData from "../../data/PizzaData";

function Pizza() {
  const [view, setView] = useState("View Specialty Pizza's");
  const [cost, setCost] = useState(0.01);
  const [size, setSize] = useState("size");
  const [crust, setCrust] = useState("crust");
  const [toppings, setToppings] = useState(["toppings"]);
  // console.log(PizzaData);
  const componentValue = (e) => {
    return e.target.attributes.value.value
  }

  const changeView = () => {
    if (view === "Create Your Own Pizza") {
      setView("View Specialty Pizza's");
    } else {
      setView("Create Your Own Pizza");
    }
  };

  const selectSize = (e) => {
    setSize(componentValue(e))
    setCost( )
  }
  const selectCrust = (e) => {
    setCrust(componentValue(e))
  }
  const selectTopping = (e) => {
    setToppings(componentValue(e))
  }

  if (view === "View Specialty Pizza's") {
    return (
      <div className="pizza">
        <button onClick={changeView}>{view}</button>

        <div className="menu_header row">
          <h1>Pizza</h1>
          <h1>{`$ ${cost}`}</h1>
        </div>
        <div className="container row">
          <h2 className="section">Size</h2>
          <div className="options">
            {Object.values(PizzaData.BuildYourOwnPizza.Size).map(size => {
              return <Card key={size} className={"option"} onClick={selectSize} children={size} value={size}/>
            })}
          </div>
          <h2 className="selected">{`${size}`}</h2>
        </div>
        <div className="container row">
          <h2 className="section">Crust</h2>
          <div className="options">
          {Object.entries(PizzaData.BuildYourOwnPizza.Crust).map(crust => {
              return <Card key={crust[0]} className={"option"} onClick={selectCrust} children={crust[0]} value={crust[0]}/>
            })}
          </div>

          <h2 className="selected">{`${crust}`}</h2>
        </div>
        <div className="container row">
          <h2 className="section">Toppings</h2>
          <div className="options">
          {PizzaData.BuildYourOwnPizza.Toppings.map(topping => {
              return <Card key={topping} className={"option"} onClick={selectTopping} children={topping} value={topping}/>
            })}
          </div>
          <h2 className="selected">{`${toppings}`}</h2>
        </div>
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
