import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { title, price, brand, images } = cartItem;
  return (
    <>
      <div className="cartItemContainer">
        <div className="cartItemInfo">
          <div className="cartItemImg">
            <img src={images[0]} alt={title} />
          </div>
          <div className="cartItemInfoText">
            <span className="cartItemTitle">{title}</span>
            <span className="cartItemBrand">{brand}</span>
          </div>
        </div>
        <div className="cartItemQuantity">
          <span className="decrease">-</span>
          <span className="quantity">Quantity: 1</span>
          <span className="increase">+</span>
        </div>
        <div className="cartItemPrice">
          <span className="price">{price} USD</span>
          <button className="removeItem">Remove</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
