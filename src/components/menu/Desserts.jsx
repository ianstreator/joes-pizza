import DessertsData from "../../data/DessertsData";
import Card from "../shared/Card";

function Desserts() {
  return (
    <div className="main_container">
      {DessertsData.map((dessertInfo, i) => (
        <Card key={i}>{dessertInfo}</Card>
      ))}
    </div>
  );
}

export default Desserts;
