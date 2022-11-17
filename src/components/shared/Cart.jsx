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
    console.log(total)
  }, [cartView]);

  return (
    <div className="cart">
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
  );
}

export default Cart;
