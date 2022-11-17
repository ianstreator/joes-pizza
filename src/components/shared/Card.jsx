import Image from "next/image";

function Card({ children: { name, cost = false, description } }) {
  const addToCartSize = 25;
  return (
    <div className="card">
      <div className="top_card">
        <p className="name">{name}</p>
        {cost && (
          <div className="cost">
            {cost.map(({ quantity = false, price }, i) => (
              <p key={i}>
                {quantity
                  ? `( ${quantity} / $${price.toFixed(2)} )`
                  : `$${price.toFixed(2)}`}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="bottom_card">
        <p className="description">{description}</p>
        <div className="cart-icon">
          <Image
            src={"/add-to-cart-icon-dark.svg"}
            width={addToCartSize}
            height={addToCartSize}
            alt={"add-cart"}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Card;
