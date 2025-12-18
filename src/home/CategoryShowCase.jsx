import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ratting from "../components/Ratting.jsx";

/* =======================
   IMAGE IMPORTS (SAFE)
======================= */

/* Product images */
import p1 from "../assets/images/categoryTab/01.jpg";
import p2 from "../assets/images/categoryTab/02.jpg";
import p3 from "../assets/images/categoryTab/03.jpg";
import p4 from "../assets/images/categoryTab/04.jpg";
import p5 from "../assets/images/categoryTab/05.jpg";
import p6 from "../assets/images/categoryTab/06.jpg";
import p7 from "../assets/images/categoryTab/07.jpg";
import p8 from "../assets/images/categoryTab/08.jpg";

/* Shape images */
import shape1 from "../assets/images/shape-img/icon/01.png";
import shape2 from "../assets/images/shape-img/icon/02.png";

/* =======================
   DATA
======================= */

const title = "Our Products";

const ProductData = [
  {
    id: 1,
    imgUrl: p1,
    cate: "Shoes",
    title: "Nike Premier X",
    brand: "Nike",
    price: "$199.00",
  },
  {
    id: 2,
    imgUrl: p2,
    cate: "Bags",
    title: "Asthetic Bags",
    brand: "D&J Bags",
    price: "$199.00",
  },
  {
    id: 3,
    imgUrl: p3,
    cate: "Phones",
    title: "iPhone 12",
    brand: "Apple",
    price: "$199.00",
  },
  {
    id: 4,
    imgUrl: p4,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    brand: "Gucci",
    price: "$199.00",
  },
  {
    id: 5,
    imgUrl: p5,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    brand: "Nike",
    price: "$199.00",
  },
  {
    id: 6,
    imgUrl: p6,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    brand: "Zaara",
    price: "$199.00",
  },
  {
    id: 7,
    imgUrl: p7,
    cate: "Bags",
    title: "Look Less Chanel Bag",
    brand: "Gucci",
    price: "$199.00",
  },
  {
    id: 8,
    imgUrl: p8,
    cate: "Shoes",
    title: "Casual Sneakers",
    brand: "Bata",
    price: "$199.00",
  },
];

/* =======================
   COMPONENT
======================= */

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (category) => {
    const updatedItems = ProductData.filter(
      (item) => item.cate === category
    );
    setItems(updatedItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div className="course-shape one">
        <img src={shape1} alt="shape" />
      </div>
      <div className="course-shape two">
        <img src={shape2} alt="shape" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt={product.title} />
                      <div className="course-category">
                        <div className="course-cate">
                          <span>{product.cate}</span>
                        </div>
                        <div className="course-review">
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h5>{product.title}</h5>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <span className="ca-name">{product.brand}</span>
                        </div>
                        <div className="course-price">
                          {product.price}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryShowCase;
