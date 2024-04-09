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
      <h1>Welcome to the store</h1>
      <h2>Products</h2>

      <ProductList products={products} setCart={setCart} />
      <h2>Cart</h2>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
