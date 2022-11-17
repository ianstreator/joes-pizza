import BeveragesData from "../../data/Beverages";
import Card from "../shared/Card";

function Beverages() {
  return (
    <>
      {BeveragesData.map((beverage, i) => (
        <Card key={i} children={beverage} />
      ))}
    </>
  );
}

export default Beverages;
