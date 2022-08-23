import styles from "./Card.module.scss";

function Card({ children: [itemName, itemPrice, itemDescription] }) {
  return (
    <div className={styles.card}>
      <div className={styles.name_cost_container}>
        <h1 className={styles.name}>{itemName}</h1>
        {itemPrice && (
          <div className={styles.cost_container}>
            {itemPrice.map(({ quantity, price }) => {
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
      <p className={styles.description}>{itemDescription}</p>
    </div>
  );
}

export default Card;
