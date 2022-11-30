import "../styles/global.scss";
import "../styles/menu.scss";
import "../styles/info.scss";
import "../styles/card.scss";
import "../styles/header.scss";
import "../styles/title_contact.scss";
import "../styles/pizza.scss";

import { CartProvider } from "../context/CartContext";
import { PizzaProvider } from "../context/PizzaContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <PizzaProvider>
        <Component {...pageProps} />
      </PizzaProvider>
    </CartProvider>
  );
}

export default MyApp;
