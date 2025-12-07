import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItem, removeItem } from "../../redux/slices/CartSlice";

import "./Product.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addToCartHandler = () => {
    dispatch(addItem(product));
  };
  const removeFromCartHandler = () => {
    dispatch(removeItem(product.id));
  };
  return (
    <div className="productContainer">
      <img className="image" src={product.images[0]} alt={product.title} />

      <div className="title" title={product.title}>
        {product.title}
      </div>
      <div className="category">{product.category}</div>
      <div className="price">${product.price}</div>
      <div className="rating">⭐{product.rating}</div>
      {items.find((item) => item.id === product.id) ? (
        <button className="addToCart remove" onClick={removeFromCartHandler}>
          Remove from Cart
        </button>
      ) : (
        <button className="addToCart add" onClick={addToCartHandler}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
