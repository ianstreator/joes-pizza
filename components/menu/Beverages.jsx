import BeveragesData from "../../data/Beverages";

function Beverages() {
  return (
    <div className="main_container">
      {BeveragesData.map(([type, cost]) => {
        return (
          <div key={type} className="card" style={{ display: "flex" }}>
            <div className="card_header">
              <h1 className="name_cost">{`${type}`}</h1>
              <p className="name_cost small">{`( $${cost.toFixed(2)} )`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beverages;
