import Image from "next/image";
import CartContext from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

function Card({ children: { name, price, prices, description } }) {
  const { addItem, removeItem, items } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const addToCartSize = 25;

  const adjustCart = ({ itemName, itemPrice }) => {
    if (typeof itemPrice !== "number") return
    if (inCart) {
      removeItem(itemName);
      setInCart(false);
    } else {
      addItem({ itemName, itemPrice });
      setInCart(true);
    }
  };

  useEffect(() => {
    setInCart(items[name])
  },[items])
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
          className="adjust_cart_icon"
          onClick={() =>
            adjustCart({
              itemName: name,
              itemPrice: prices ? prices : price,
            })
          }
        >
          <Image
            src={
              inCart ? "/remove-from-cart-icon.svg" : "/add-to-cart-icon.svg"
            }
            width={addToCartSize}
            height={addToCartSize}
            alt="adjust_cart"
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Card;
