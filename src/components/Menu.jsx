import Pizza from "./menu/Pizza";
import Appetizers from "./menu/Appetizers";
import Salads from "./menu/Salads";
import Sandwiches from "./menu/Sandwiches";
import Burgers from "./menu/Burgers";
import Pasta from "./menu/Pasta";
import Dinners from "./menu/Dinners";
import Beverages from "./menu/Beverages";
import Desserts from "./menu/Desserts";
import Cart from "./shared/Cart";

import clsx from "clsx";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.getElementById("menu").scrollTop = 0;
  }, [selected]);
  return (
    <>
      <div className="menu" id="menu">
        <nav className="nav">
          <ul>
            {Object.keys(menuCategories).map((category, i) => {
              return (
                <li
                  id={i}
                  key={category}
                  onClick={() => setSelected(category)}
                  style={{ cursor: "pointer" }}
                  className={clsx(category === selected && "active")}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="selected">{menuCategories[selected]}</div>
        <Cart />
      </div>
    </>
  );
}

export default Menu;
