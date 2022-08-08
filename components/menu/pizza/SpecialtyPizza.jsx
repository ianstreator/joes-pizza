import PizzaData from "../../../data/PizzaData";

function SpecialtyPizza() {
  const Size_Cost = PizzaData.SpecialtyPizza.Size_Cost;
  const Pizza = PizzaData.SpecialtyPizza.Pizza;
  const Other = PizzaData.SpecialtyPizza.Other;
  return (
    <main className="specialty_pizza">
      <header className="specialty_pizza_header">
        <div className="size_cost">
          {Size_Cost.map(([size, cost], i) => {
            return <small key={i}>{`${size}" - $${cost}`}</small>;
          })}
        </div>
      </header>
      <section className="pizza_cards_container">
        {Pizza.map(([name, description]) => {
          return (
            <div key={name} className="pizza_card">
              <h3 className="pizza_name">{name}</h3>
              <p className="pizza_description">{description}</p>
            </div>
          );
        })}
        <section className="other_pizza_items">
          <h1>{`Calzones & Panzerotti  $10.50 each`}</h1>
          <small>{`(+$1.50 per additional ingredient)`}</small>
          <div className="other_pizza_container">
            {Other.map(([name, description]) => {
              return (
                <div key={name} className="other_card">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

export default SpecialtyPizza;
