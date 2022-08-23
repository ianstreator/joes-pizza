import DinnersData from "../../data/DinnersData";
import Card from "../shared/Card";

function Dinners() {
  return (
    <div className="main_container">
      {DinnersData.map((dinnerInfo) => {
        return <Card key={dinnerInfo[0]}>{dinnerInfo}</Card>;
      })}
    </div>
  );
}
export default Dinners;
