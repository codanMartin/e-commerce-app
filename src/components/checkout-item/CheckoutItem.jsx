import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const removeItemHandler = () => {
    deleteItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const decrementItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
