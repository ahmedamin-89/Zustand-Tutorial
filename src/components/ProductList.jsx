import React from "react";

const ProductList = ({ products, setCart }) => {
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <button
            onClick={() => {
              setCart((cart) => [...cart, product]);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
