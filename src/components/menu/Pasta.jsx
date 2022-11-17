import Pastas from "../../data/PastasData";
import Card from "../shared/Card";

function Pasta() {
  const dishes = Pastas.Pastas;
  const toppers = Pastas.Toppers;
  return (
    <>
      <h1 className="section_header">Toppers</h1>
      <div className="container">
        {toppers.map((e, i) => (
          <div key={i} className="horizontal_grouping">
            <p className="name">{e}</p>
            <p className="cost">{`+ $4.75`}</p>
          </div>
        ))}
      </div>

      <h1 className="section_header">Pastas</h1>
      <div className="small_container">
        {dishes.map((pastaInfo, i) => (
          <Card key={i}>{pastaInfo}</Card>
        ))}
      </div>
    </>
  );
}

export default Pasta;
