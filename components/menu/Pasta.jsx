import Pastas from "../../data/PastasData";
import Card from "../shared/Card";

function Pasta() {
  const dishes = Pastas.Pastas;
  const toppers = Pastas.Toppers;
  return (
    <div className="main_container">
      <div className="card">
        {toppers.map((e) => {
          return (
            <div key={e} className="card_header">
              <h3 key={e} className="name_cost">
                {e}
              </h3>
              <p className="name_cost small">{`+ $4.75`}</p>
            </div>
          );
        })}
      </div>

      <h1 className="section_header">Entrées</h1>
      <div className="small_container">
        {dishes.map((pastaInfo) => {
          return <Card key={pastaInfo[0]}>{pastaInfo}</Card>;
        })}
      </div>
    </div>
  );
}

export default Pasta;
