import React from "react";
import { useCartStore } from "../store/CartStore";

const ProductList = ({ products }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="productList">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h4>{product.name}</h4>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
