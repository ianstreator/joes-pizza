import { useContext } from "react";
import Image from "next/image";
import clsx from "clsx";

import CartContext from "../../context/CartContext";

function Cart() {
  const { items, total, setCartView, cartView, removeItem } =
    useContext(CartContext);
  const imageSize = 25;

  return (
    <div className={clsx("cart", cartView && "show")}>
      <div className="cart_head">
        <div className="cart_wrapper">
          <div className="icon_wrapper">
            <Image
              src={
                Object.keys(items).length
                  ? "/full-cart-icon.svg"
                  : "/cart-icon.svg"
              }
              width={imageSize}
              height={imageSize}
              alt="cart"
            ></Image>
          </div>
          <div className="cart_count">{Object.keys(items).length}</div>
        </div>
        {total > 0 ? (
          <div className="cart_center">Total ${total.toFixed(2)}</div>
        ) : (
          <div className="cart_center">Your cart is empty!</div>
        )}

        <button
          className={clsx("icon_wrapper", "arrow", cartView && "close")}
          onClick={() => setCartView(!cartView)}
        >
          <Image
            src={"/arrow-icon.svg"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
          ></Image>
        </button>
      </div>
      <div className="cart_items">
        {Object.keys(items).length > 0 &&
          Object.entries(items).map((item, i) => {
            const [itemName, itemPrice] = item;
            return (
              <div key={i} className="item">
                <div className="name_price_container">
                  <div className="name">{itemName}</div>
                  <div className="price">${itemPrice.toFixed(2)}</div>
                </div>
                <button
                  className="cart_icon"
                  onClick={() => removeItem(itemName)}
                >
                  <Image
                    src="/remove-from-cart-icon.svg"
                    width={25}
                    height={25}
                    alt="remove-item"
                  ></Image>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
