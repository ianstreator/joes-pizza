import BeveragesData from "../../data/Beverages";
import Card from "../shared/Card";

function Beverages() {
  return (
    <div className="main_container">
      {BeveragesData.map((beverage, i) => (
        <Card key={i} children={beverage} />
      ))}
    </div>
  );
}

export default Beverages;
