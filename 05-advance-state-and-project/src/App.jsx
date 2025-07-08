import { useState } from "react";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  );
}

export default App;
