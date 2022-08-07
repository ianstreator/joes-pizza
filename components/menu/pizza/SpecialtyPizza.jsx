import PizzaData from "../../../data/PizzaData";

function SpecialtyPizza() {
  const Size_Cost = PizzaData.SpecialtyPizza.Size_Cost;
  const Pizza = PizzaData.SpecialtyPizza.Pizza;
  const Other = PizzaData.SpecialtyPizza.Other;
  return (

      <main className="specialty_pizza">
        <header className="specialty_pizza_header">
          <h1>{`Size & Cost`}</h1>
          <div className="size_cost">
            {Size_Cost.map(([size, cost], i) => {
              return <small key={i}>{`${size}" - $${cost}`}</small>;
            })}
          </div>
        </header>
        <section className="pizza_cards_container">
          {Pizza.map(([name, description]) => {
            return (
              <div className="pizza_card">
                <h3 className="pizza_name">{name}</h3>
                <p className="pizza_description">{description}</p>
              </div>
            );
          })}
        </section>
        <section className="other_pizza_items">{/* {Other.} */}</section>
      </main>
  );
}

export default SpecialtyPizza;
