import { useState } from "react";
import BuildYourOwnPizza from "./pizza/BuildYourOwnPizza";

function Pizza() {
  const  specialView = "View Our Specialty Pizza's"
  const  byopView = "Build Your Own Pizza"

  const [view, setView] = useState(specialView);
  const changeView = () => {
    if (view === byopView) {
      setView(specialView);
    } else {
      setView(byopView);
    }
  };
  if (view === specialView) {
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
        <h1>{`Our Specialty Pizza's`}</h1>
      </div>
    );
  }
}

export default Pizza;
