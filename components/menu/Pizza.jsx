import { useState, useEffect } from "react";
import BuildYourOwnPizza from "./pizza/BuildYourOwnPizza";

function Pizza() {
  const [view, setView] = useState("Our Specialty Pizza's");
  const changeView = () => {
    if (view === "Build Your Own Pizza") {
      setView("Our Specialty Pizza's");
    } else {
      setView("Build Your Own Pizza");
    }
  };
  if (view === "Our Specialty Pizza's") {
    return (
      <div className="pizza">
        <button className="pizza_toggle" onClick={changeView}>
          {view}
        </button>

        <BuildYourOwnPizza />
        <div className="fade" id="fade"></div>
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
