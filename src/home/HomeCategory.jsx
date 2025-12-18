import { Link } from "react-router-dom";
import React from "react";
import cat1 from "../../assets/images/category/01.jpg";
import cat2 from "../../assets/images/category/02.jpg";
import cat3 from "../../assets/images/category/03.jpg";
import cat4 from "../../assets/images/category/04.jpg";
import cat5 from "../../assets/images/category/05.jpg";
import cat6 from "../../assets/images/category/06.jpg";


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";



  const categoryList = [
  { imgUrl: cat1, title: "DSLR Camera", iconName: "icofont-brand-windows" },
  { imgUrl: cat2, title: "Shoes", iconName: "icofont-brand-windows" },
  { imgUrl: cat3, title: "Photography", iconName: "icofont-brand-windows" },
  { imgUrl: cat4, title: "Formal Dress", iconName: "icofont-brand-windows" },
  { imgUrl: cat5, title: "Colorful Bags", iconName: "icofont-brand-windows" },
  { imgUrl: cat6, title: "Home Decor", iconName: "icofont-brand-windows" },
];


const HomeCategory = () => {
  return <div className="Category-section style-4 padding-tb">
    <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
        </div>
        {/* Section Card */}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                {
                    categoryList.map((val,i)=>(<div key={i} className="col">
                        <Link to="/shop" className="category-item">
                        <div className="category-inner">
                            {/*image thumbnail */}
                            <div className="category-content">
                                <img src={val.imgUrl} alt=""/>
                            </div>
                            {/* category content */}
                            <div className="category-content">
                                <div className="cate-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <Link to="/shop"><h6>{val.title}</h6></Link>
                            </div>
                        </div>
                        </Link>
                        </div>))
                }
            </div>
            {/* btn get started */}
            <div className="text-center mt-5">
                <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
            </div>
        </div>
        </div>
  </div>;
};

export default HomeCategory;
