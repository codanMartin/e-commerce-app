import { useContext } from "react"

import { CartContext } from "../../contexts/Cart";

import Button from "../button/Button";

import "./ProductCard.scss";


const ProductCard = ({ product }) => {

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => {addItemToCart(product)}

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
