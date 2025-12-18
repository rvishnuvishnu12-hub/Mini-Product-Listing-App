import React from "react";
import { Link } from "react-router-dom";

/* Images */
import cat1 from "../assets/images/category/01.jpg";
import cat2 from "../assets/images/category/02.jpg";
import cat3 from "../assets/images/category/03.jpg";
import cat4 from "../assets/images/category/04.jpg";
import cat5 from "../assets/images/category/05.jpg";
import cat6 from "../assets/images/category/06.jpg";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  { imgUrl: cat1, title: "DSLR Camera", iconName: "icofont-camera" },
  // { imgUrl: cat2, title: "Shoes", iconName: "icofont-shoe" },
  { imgUrl: cat3, title: "Photography", iconName: "icofont-ui-camera" },
  // { imgUrl: cat4, title: "Formal Dress", iconName: "icofont-shirt" },
  { imgUrl: cat5, title: "Colorful Bags", iconName: "icofont-bag" },
  { imgUrl: cat6, title: "Home Decor", iconName: "icofont-home" },
];

const HomeCategory = () => {
  return (
    <div
      style={{
        padding: "60px 16px",
        background: "#f9fafb",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              color: "#6366f1",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            {subTitle}
          </span>
          <h2
            style={{
              fontSize: "32px",
              marginTop: "10px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {categoryList.map((item, index) => (
            <Link
              key={index}
              to="/shop"
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.08)";
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#eef2ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      color: "#4f46e5",
                      fontSize: "22px",
                    }}
                  >
                    <i className={item.iconName}></i>
                  </div>

                  <h6
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                    }}
                  >
                    {item.title}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            to="/shop"
            style={{
              padding: "14px 36px",
              background: "#4f46e5",
              color: "#fff",
              borderRadius: "999px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(79,70,229,0.35)",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#4338ca")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#4f46e5")
            }
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
