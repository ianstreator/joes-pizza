import { useState } from "react";
import Card from "../shared/card";
import PizzaData from "../../data/PizzaData";

function Pizza() {
  const [view, setView] = useState("View Specialty Pizza's");
  const [cost, setCost] = useState(0.01);
  const [size, setSize] = useState("size");
  const [crust, setCrust] = useState("crust");
  const [toppings, setToppings] = useState("toppings");
  console.log(PizzaData);
  const changeView = () => {
    if (view === "Create Your Own Pizza") {
      setView("View Specialty Pizza's");
    } else {
      setView("Create Your Own Pizza");
    }
  };
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
            <Card />
          </div>
          <p className="selected">{`${size}`}</p>
        </div>
        <div className="container row">
          <h2 className="section">Crust</h2>
          <div className="options"></div>

          <p className="selected">{`${crust}`}</p>
        </div>
        <div className="container row">
          <h2 className="section">Toppings</h2>
          <div className="options"></div>
          <p className="selected">{`${toppings}`}</p>
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
