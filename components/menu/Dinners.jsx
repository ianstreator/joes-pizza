import DinnersData from "../../data/DinnersData";

function Dinners() {
  return (
    <div className="main_container">
      {DinnersData.map(([name, cost, description]) => {
        return (
          <div key={name} className="card">
            <div className="card_header">
              <h1 className="name_cost">{name}</h1>
              <div className="cost_container">
                {cost.map(([quantity, price]) => {
                  return (
                    <p
                      key={quantity}
                      className="name_cost small"
                    >{`${quantity} / $${price.toFixed(2)}`}</p>
                  );
                })}
              </div>
            </div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Dinners;
