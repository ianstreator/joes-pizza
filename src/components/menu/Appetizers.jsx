import AppetizersData from "../../data/AppetizerData";
import Card from "../shared/Card";

function Appetizers() {
  // const quantity = AppetizersData.quantity;
  const shareables = AppetizersData.shareables;
  const solos = AppetizersData.solos;
  return (
    <div id="category">
      <h1 className="section_header">Shareables</h1>
      <div className="small_container">
        {shareables.map((app, i) => (
          <Card key={i}>{app}</Card>
        ))}
      </div>
      <h1 className="section_header">Solos</h1>
      <div className="small_container">
        {solos.map((app, i) => (
          <Card key={i}>{app}</Card>
        ))}
      </div>
    </div>
  );
}

export default Appetizers;
