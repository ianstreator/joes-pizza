import { useState } from "react";
import BuildYourOwnPizza from "./pizza/BuildYourOwnPizza";
import SpecialtyPizza from "./pizza/SpecialtyPizza";

function Pizza() {
  const Specialty_Pizza = "View Our Specialty Pizza's";
  const Build_Your_Own_Pizza = "Build Your Own Pizza";
  const [view, setView] = useState(Build_Your_Own_Pizza);
  const changeView = () => {
    if (view === Build_Your_Own_Pizza) {
      setView(Specialty_Pizza);
    } else {
      setView(Build_Your_Own_Pizza);
    }
  };
  return (
    <div className="pizza">
      <button className="pizza_toggle" onClick={changeView}>
        {view}
      </button>
      {view === Specialty_Pizza ? <BuildYourOwnPizza /> : <SpecialtyPizza />}
    </div>
  );
}

export default Pizza;
