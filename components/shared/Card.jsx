import styles from "./Card.module.scss";

function Card({ children: { name, cost = false, description } }) {
  return (
    <div className={styles.card}>
      <div className={styles.name_cost_container}>
        <h1 className={styles.name}>{name}</h1>
        {cost && (
          <div className={styles.cost_container}>
            {cost.map(({ quantity = false, price }) => {
              console.log(quantity, price);
              return (
                <p key={price} className={styles.cost}>
                  {quantity
                    ? `( ${quantity} / $${price.toFixed(2)} )`
                    : `$${price.toFixed(2)}`}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Card;
