import DessertsData from "../../data/DessertsData";
import Card from "../shared/Card";

function Desserts() {
  return (
    <>
      {DessertsData.map((dessertInfo, i) => (
        <Card key={i}>{dessertInfo}</Card>
      ))}
    </>
  );
}

export default Desserts;
