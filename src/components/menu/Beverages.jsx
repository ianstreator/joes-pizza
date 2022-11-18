import BeveragesData from "../../data/Beverages";
import Card from "../shared/Card";

function Beverages() {
  return (
    <>
      {BeveragesData.map((beverage, i) => (
        <Card key={i}>{beverage}</Card>
      ))}
    </>
  );
}

export default Beverages;
