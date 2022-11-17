import PizzaData from "../../../data/PizzaData";
import Card from "../../shared/Card";

function SpecialtyPizza() {
  const Size_Cost = PizzaData.SpecialtyPizza.Size_Cost;
  const Pizzas = PizzaData.SpecialtyPizza.Pizza;
  const Calzones_Panzerotti = PizzaData.SpecialtyPizza.Other;
  return (
    <main className="specialty_pizza">
      <header className="specialty_pizza_header">
        <div className="size_cost">
          {Size_Cost.map(({ size, cost }, i) => (
            <small key={i}>{`${size}" - $${cost}`}</small>
          ))}
        </div>
      </header>
      <section className="pizza_cards_container">
        {Pizzas.map((PizzaInfo, i) => {
          return <Card key={i}>{PizzaInfo}</Card>;
        })}
        <section className="other_pizza_items">
          <h1>Calzones & Panzerotti $10.50 each</h1>
          <small>( + $1.50 per additional ingredient )</small>
          <div className="other_pizza_container">
            {Calzones_Panzerotti.map((Calzones_Panzerotti_Info, i) => {
              return <Card key={i}>{Calzones_Panzerotti_Info}</Card>;
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

export default SpecialtyPizza;
