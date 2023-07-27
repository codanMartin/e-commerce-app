import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/Cart"

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./CartDropdown.scss";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen)
    navigate("/checkout");
  }


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
