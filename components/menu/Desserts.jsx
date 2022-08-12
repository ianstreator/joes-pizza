import DessertsData from "../../data/DessertsData";

function Desserts() {
  return (
    <div className="main_container">
      {DessertsData.map(([name, cost, description]) => {
        return (
          <div key={name} className="card">
            <div className="card_header">
              <h1 className="name_cost">{`${name}`}</h1>
              <p className="name_cost small"> {`$${cost.toFixed(2)}`}</p>
            </div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Desserts;
