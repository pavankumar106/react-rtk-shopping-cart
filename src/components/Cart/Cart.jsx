import { useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="cartContainer">
      <div className="cartHeader">
        <span className="cartHeaderText">Your Cart</span>
      </div>
      {items.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="cartTotal">
        <span className="totalLabel">Total:</span>
        <span className="totalPrice">price USD</span>
      </div>
    </div>
  );
};

export default Cart;
