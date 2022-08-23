import DessertsData from "../../data/DessertsData";
import Card from "../shared/Card";

function Desserts() {
  return (
    <div className="main_container">
      {DessertsData.map((dessertInfo) => {
        return <Card key={dessertInfo[0]}>{dessertInfo}</Card>;
      })}
    </div>
  );
}

export default Desserts;
