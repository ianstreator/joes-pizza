import AppetizersData from "../../data/AppetizersData";
import Card from "../shared/Card";

function Appetizers() {
  const quantity = AppetizersData.quantity;
  const quantityApps = AppetizersData.quantityAppetizers;
  const soloApps = AppetizersData.soloAppetizers;
  return (
    <div className="main_container">
      <h1 className="section_header">Shareables</h1>
      <table style={{ fontSize: "2rem" }}>
        <thead>
          <tr>
            <th style={{ paddingRight: "100%" }}>Name</th>
            {quantity.map((num, i) => (
              <th key={i}>{`(${num} pcs)`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {quantityApps.map((app, i) => (
            <tr key={i} title={app.name}>
              <td>{app.name}</td>
              {app.cost.map((price, i) => (
                <td key={i}>${price.price.toFixed(2)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="section_header">Solos</h1>
      <div className="small_container">
        {soloApps.map((app, i) => (
          <Card key={i}>{app}</Card>
        ))}
      </div>
    </div>
  );
}

export default Appetizers;
