import Pizza from "./menu/Pizza";
import Appetizers from "./menu/Appetizers";
import Salads from "./menu/Salads";
import Sandwiches from "./menu/Sandwiches";
import Burgers from "./menu/Burgers";
import Pasta from "./menu/Pasta";
import Dinners from "./menu/Dinners";
import Beverages from "./menu/Beverages";
import Desserts from "./menu/Desserts";

import clsx from "clsx"
import { useState } from "react";

function Menu() {
  const [selected, setSelected] = useState("Pizza");

  const menuCategories = {
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
  return (
    <div className="menu">
      <nav className="nav">
        <h2>Menu</h2>
        <ul>
          {Object.keys(menuCategories).map((category) => {
            return (
              <li
                id={`${category}`}
                key={category}
                onClick={() => setSelected(category)}
                className={clsx(category === selected && "active")}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="selected">{menuCategories[selected]}</div>
    </div>
  );
}

export default Menu;
