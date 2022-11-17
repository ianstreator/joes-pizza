import "../styles/global.scss";
import "../styles/menu.scss";
import "../styles/info.scss";
import "../styles/card.scss";
import "../styles/header.scss";
import "../styles/title_contact.scss";
import "../styles/pizza.scss";

import { Provider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
