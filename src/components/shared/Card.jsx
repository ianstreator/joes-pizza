import Image from "next/image";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

function Card({ children: { name, price, prices, description } }) {
  const { addItem } = useContext(CartContext);
  const addToCartSize = 25;
  return (
    <div className="card">
      <div className="top_card">
        <p className="name">{name}</p>
        {prices ? (
          <div className="price multi">
            {prices.map(({ size = false, quantity = false, price }, i) => (
              <div className="data" key={i}>
                <div>{size ? size : quantity}</div>
                <div>-</div>
                <div>${price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="price" key={price}>
            ${price.toFixed(2)}
          </div>
        )}
      </div>
      <div className="bottom_card">
        <p className="description">{description}</p>
        <button
          className="add-cart-icon"
          onClick={() =>
            addItem({
              itemName: name,
              itemPrice: prices ? prices : price,
            })
          }
        >
          <Image
            src={"/add-to-cart-icon.svg"}
            width={addToCartSize}
            height={addToCartSize}
            alt="add-cart"
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Card;
