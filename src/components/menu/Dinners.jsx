import DinnersData from "../../data/DinnersData";
import Card from "../shared/Card";

function Dinners() {
  return (
    <>
      {DinnersData.map((dinnerInfo, i) => (
        <Card key={i}>{dinnerInfo}</Card>
      ))}
    </>
  );
}
export default Dinners;
