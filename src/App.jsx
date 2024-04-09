import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import { products } from "./products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <h3>Welcome to the store</h3>
      <ProductList products={products} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
