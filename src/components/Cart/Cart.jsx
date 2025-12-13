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
      {items.length > 0 ? (
        items.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <div>No items in cart</div>
      )}
      {items.length > 0 && (
        <div className="cartTotal">
          <span className="totalLabel">Total:</span>
          <span className="totalPrice">
            price{" "}
            {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
