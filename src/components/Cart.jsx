import React from "react";
import { useCartStore } from "../store/CartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));
  return (
    <div className="cartList">
      {cart.map((product) => (
        <div className="cartItem" key={product.id}>
          <h4>{product.name}</h4>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
