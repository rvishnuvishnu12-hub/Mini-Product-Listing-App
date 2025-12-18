import React, { useState } from "react";

const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga omnis deleniti quibusdam quasi, recusandae repudiandae impedit, aspernatur fugit, molestiae mollitia inventore. Blanditiis suscipit at fugit expedita tempora, id ex.";

const ProductDisplay = ({ item }) => {
  if (!item) return null;

  const { name, price, seller, ratingsCount, quantity } = item;

  const [preQuantity, setPreQuantity] = useState(quantity || 1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const increaseQty = () => {
    setPreQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setPreQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="product-display">
      {/* PRODUCT INFO */}
      <div>
        <h4>{name}</h4>

        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> ({ratingsCount} reviews)</span>
        </p>

        <h4>${price}</h4>
        <h6>Seller: {seller}</h6>
        <p>{desc}</p>
      </div>

      {/* CART SECTION */}
      <div>
        <form>
          {/* SIZE */}
          <div className="selected-product size">
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

          {/* COLOR */}
          <div className="selected-product color">
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

          {/* QUANTITY */}
          <div className="cart-plus-minus">
            <button
              type="button"
              className="dec qtybutton"
              onClick={decreaseQty}
            >
              -
            </button>

            <input
              className="cart-plus-minus-box"
              type="text"
              value={preQuantity}
              readOnly
            />

            <button
              type="button"
              className="inc qtybutton"
              onClick={increaseQty}
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button type="button" className="lab-btn mt-3">
            ADD TO CART
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
