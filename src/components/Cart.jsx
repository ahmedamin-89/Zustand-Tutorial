import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <h3>Cart</h3>
      {cart.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <button
            onClick={() => {
              setCart(cart.filter((p) => p.id !== product.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button
          onClick={() => {
            setCart([]);
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
