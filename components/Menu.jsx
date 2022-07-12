import Pizza from "./menu/Pizza";
import Appetizers from "./menu/Appetizers";
import Salads from "./menu/Salads";
import Sandwiches from "./menu/Sandwiches";
import Burgers from "./menu/Burgers";
import Pasta from "./menu/Pasta";
import Dinners from "./menu/Dinners";
import Beverages from "./menu/Beverages";
import Desserts from "./menu/Desserts";

import { useState } from "react";


function Menu() {
  const [selected, setSelected] = useState("test");
  const menuItems = {
    Pizza: <Pizza />,

    Appetizers: <Appetizers />,

    Salads: <Salads />,

    Sandwiches: <Sandwiches />,

    Burgers: <Burgers />,

    Pastas: <Pasta />,

    Dinners: <Dinners />,

    Beverages: <Beverages />,

    Desserts: <Desserts />,
  };
  const select = (e) => {
    const value = e.target.outerText;
    setSelected(value);
  };
  return (
    <div className="menu">
      <nav className="nav">
        <h2>Menu</h2>
        <ul>
          {Object.entries(menuItems).map((item) => {
            return <li onClick={select}>{item[0]}</li>;
          })}
        </ul>
      </nav>
      <div className="selected">{menuItems[selected]}</div>
    </div>
  );
}

export default Menu;
