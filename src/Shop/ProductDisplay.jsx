import React, { useState } from 'react'
const desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga omnis deleniti quibusdam quasi, recusandae repudiandae impedit, aspernatur fugit, molestiae mollitia inventore. Blanditiis suscipit at fugit expedita tempora, id ex."


const ProductDisplay = ({item}) => {
    console.log(item)
    const {name, id, price, seller, ratingsCount, quantity} =item;

    const [prequantity, setQuantity] =useState(quantity);
    const [coupon, setCoupon] =useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange =(e) => {
        setSize(e.target.value);
    }

      const handleColorChange =(e) => {
        setColor(e.target.value);
    }
 
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
              <i className='icfont-start'></i>
              <i className='icfont-start'></i>
              <i className='icfont-start'></i>
              <i className='icfont-start'></i>
              <i className='icfont-start'></i>
              <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/** cart components */}
        <div>
            <from>
                <div className='selected-product size'>
                  <select value= {size} onChange={handleSizeChange}> 
                      <option>select size</option>
                      <option value="SM">SM</option>
                      <option value="MB">MB</option>
                      <option value="LG">LG</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXl</option>
                  </select>
                  <i className='icofont-rounded-down'></i>
                </div>
                <div className='selected-product color'>
                  <select value= {color} onChange={handleColorChange}> 
                      <option>select color</option>
                      <option value="pink">pink</option>
                      <option value="ash">ash</option>
                      <option value="red">red</option>
                      <option value="yellow">yellow</option>
                      <option value="bule">bule</option>
                  </select>
                  <i className='icofont-rounded-down'></i>
                </div>
                <button> ADD CART </button>
                 <div className='cart-plus-minus'>
                    <div className='dec qtybutton'>-</div>
                    <input  className='cart-plus-minus-box' type="text" name="qtybutton" id="qtybutton" value={prequantity} />
                    <div className='inc qtybutton'>+</div>
                 </div>
            </from>
        </div>
    </div>
  )
}

export default ProductDisplay