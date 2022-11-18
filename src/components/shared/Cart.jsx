import { useContext, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

import CartContext from "../../context/CartContext";

function Cart() {
  const { items, total, setCartView, cartView } = useContext(CartContext);
  const imageSize = 25;

  useEffect(() => {
    console.log(cartView);
    console.log(items);
    console.log(total);
  }, [cartView]);

  return (
    <div className={clsx("cart", cartView && "show")}>
      <div className="cart-head">
        <div className="cart_wrapper">
          <div className="icon_wrapper">
            <Image
              src="/cart-icon.svg"
              width={imageSize}
              height={imageSize}
            ></Image>
          </div>
          <div className="cart_count">{Object.keys(items).length}</div>
        </div>
        {total > 0 ? (
          <div className="cart-center">Total ${total.toFixed(2)}</div>
        ) : (
          <div className="cart-center">Your cart is empty!</div>
        )}

        <button
          className={clsx("icon_wrapper", "arrow", cartView && "close")}
          onClick={() => setCartView(!cartView)}
        >
          <Image
            src={"/arrow-icon.svg"}
            width={imageSize}
            height={imageSize}
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Cart;
