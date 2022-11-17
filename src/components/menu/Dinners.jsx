import DinnersData from "../../data/DinnersData";
import Card from "../shared/Card";

function Dinners() {
  return (
    <div className="main_container">
      {DinnersData.map((dinnerInfo, i) => (
        <Card key={i}>{dinnerInfo}</Card>
      ))}
    </div>
  );
}
export default Dinners;
