import Image from "next/image";
import CartContext from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

function Card({ children: { name, price, prices, description } }) {
  const { items, adjustCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const iconSize = 25;

  useEffect(() => {
    setInCart(items[name]);
  }, [items]);
  
  return (
    <div className="card">
      <div className="top_card">
        <p className="name">{name}</p>
        {prices ? (
          <div className="price multi">{`$(${prices.length})`}</div>
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
            width={iconSize}
            height={iconSize}
            alt="adjust_cart"
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Card;
