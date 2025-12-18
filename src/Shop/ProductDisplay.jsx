import React, { useState } from "react";

const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga omnis deleniti quibusdam quasi, recusandae repudiandae impedit, aspernatur fugit, molestiae mollitia inventore.";

const ProductDisplay = ({ item }) => {
  if (!item) return null;

  const { name, price, seller, ratingsCount, quantity } = item;

  const [qty, setQty] = useState(quantity || 1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className="product-display">
      {/* Product Info */}
      <div className="product-content">
        <h4>{name}</h4>

        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> ({ratingsCount} reviews)</span>
        </p>

        <h4 className="price">${price}</h4>
        <h6>Seller: {seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Cart */}
      <form className="cart-form">
        {/* Size */}
        <div className="select-box">
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="SM">SM</option>
            <option value="MD">MD</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <i className="icofont-rounded-down"></i>
        </div>

        {/* Color */}
        <div className="select-box">
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select Color</option>
            <option value="pink">Pink</option>
            <option value="ash">Ash</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </select>
          <i className="icofont-rounded-down"></i>
        </div>

        {/* Quantity */}
        <div className="cart-plus-minus">
          <button type="button" onClick={decreaseQty}>-</button>
          <input type="text" value={qty} readOnly />
          <button type="button" onClick={increaseQty}>+</button>
        </div>

        <button type="button" className="lab-btn">
          ADD TO CART
        </button>
      </form>
    </div>
  );
};

export default ProductDisplay;
