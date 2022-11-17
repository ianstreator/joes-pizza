import Image from "next/image";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

function Card({ children: { name, price, description } }) {
  const { addItem } = useContext(CartContext);
  const addToCartSize = 25;
  return (
    <div className="card">
      <div className="top_card">
        <p className="name">{name}</p>
        <div className="cost" key={price}>
          ${price}
        </div>
      </div>
      <div className="bottom_card">
        <p className="description">{description}</p>
        <button
          className="add-cart-icon"
          onClick={() =>
            addItem({
              itemName: name,
              itemCost: cost?.price ? cost.price : cost,
            })
          }
        >
          <Image
            src={"/add-to-cart-icon.svg"}
            width={addToCartSize}
            height={addToCartSize}
            alt={"add-cart"}
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Card;
