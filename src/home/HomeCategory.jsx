import React from "react";
import { Link } from "react-router-dom";

/* ✅ Image imports (Vite + Netlify safe) */
import cat1 from "../../assets/images/category/01.jpg";
import cat2 from "../../assets/images/category/02.jpg";
import cat3 from "../../assets/images/category/03.jpg";
import cat4 from "../../assets/images/category/04.jpg";
import cat5 from "../../assets/images/category/05.jpg";
import cat6 from "../../assets/images/category/06.jpg";

/* Text Content */
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

/* Category Data */
const categoryList = [
  {
    imgUrl: cat1,
    imgAlt: "DSLR Camera",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: cat2,
    imgAlt: "Shoes",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: cat3,
    imgAlt: "Photography",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: cat4,
    imgAlt: "Formal Dress",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: cat5,
    imgAlt: "Colorful Bags",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: cat6,
    imgAlt: "Home Decor",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="Category-section style-4 padding-tb">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* Category Cards */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((item, index) => (
              <div key={index} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* Image */}
                    <div className="category-thumb">
                      <img src={item.imgUrl} alt={item.imgAlt} />
                    </div>

                    {/* Content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={item.iconName}></i>
                      </div>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
