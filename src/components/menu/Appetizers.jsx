import AppetizersData from "../../data/AppetizersData";
import Card from "../shared/Card";

function Appetizers() {
  const quantity = AppetizersData.quantity;
  const shareables = AppetizersData.shareables;
  const solos = AppetizersData.solos;
  return (
    <div id="category">
      <h1 className="section_header">Shareables</h1>
      <table style={{ fontSize: "1rem" }}>
        <thead>
          <tr>
            <th style={{ paddingRight: "100%" }}>Name</th>
            {quantity.map((amount, i) => (
              <th key={i}>{`(${amount} pcs)`}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {shareables.map((app, i) => (
            <tr key={i} title={app.name}>
              <td>{app.name}</td>
              {app.prices.map((price, i) => (
                <td key={i}>${price.toFixed(2)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

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
