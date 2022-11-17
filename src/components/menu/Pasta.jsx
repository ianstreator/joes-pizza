import Pastas from "../../data/PastasData";
import Card from "../shared/Card";

function Pasta() {
  const dishes = Pastas.Pastas;
  const toppers = Pastas.Toppers;
  return (
    <div className="main_container">
      <h1 className="section_header">Toppers</h1>
      <div className="card special">
        {toppers.map((e, i) => (
          <div key={i} className="card_header">
            <h3 className="name_cost">{e}</h3>
            <p className="name_cost small">{`+ $4.75`}</p>
          </div>
        ))}
      </div>

      <h1 className="section_header">Pastas</h1>
      <div className="small_container">
        {dishes.map((pastaInfo, i) => (
          <Card key={i}>{pastaInfo}</Card>
        ))}
      </div>
    </div>
  );
}

export default Pasta;
