import { useState } from "react";
import BuildYourOwnPizza from "./pizza/BuildYourOwnPizza";
import SpecialtyPizza from "./pizza/SpecialtyPizza";

function Pizza() {
  const specialView = "View Our Specialty Pizza's";
  const byopView = "Build Your Own Pizza";

  const [view, setView] = useState(specialView);
  const changeView = () => {
    if (view === byopView) {
      setView(specialView);
    } else {
      setView(byopView);
    }
  };
  return (
    <div className="pizza">
      <button className="pizza_toggle" onClick={changeView}>
        {view}
      </button>

      {view === specialView ? (
        <>
          {" "}
          <BuildYourOwnPizza /> <div className="fade" id="fade"></div>
        </>
      ) : (
        <SpecialtyPizza />
      )}
    </div>
  );
}

export default Pizza;
