import { useState } from "react";
import Card from "./shared/Card";

function Pizza() {
  const [total, setTotal] = useState(0.01);
  const [size, setSize] = useState("size");
  const [crust, setCrust] = useState("crust");
  const [toppings, setToppings] = useState("toppings");

  return (
    <div className="pizza">
      <div className="menu_header row">
        <h1>Pizza</h1>
        <h1>{`$ ${total}`}</h1>
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
}

export default Pizza;
