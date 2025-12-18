import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productData from "../products.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import ProductDisplay from "./ProductDisplay";

const SingleProduct = () => {
  const { id } = useParams();

 
  const product = productData.find(
    (p) => p.id?.toString().trim() === id?.toString().trim()
  );

 
  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={"OUR SHOP SINGLE"}
        curPage={"Shop / Single Product"}
      />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">

                    {/* IMAGE */}
                    <div className="col-md-6 col-12">
                      <Swiper
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 2000 }}
                        modules={[Autoplay]}
                      >
                        <SwiperSlide>
                          <div className="single-thumb">
                            <img
                              src={product.img}
                              alt={product.name}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="col-md-6 col-12">
                      <ProductDisplay item={product} />
                    </div>

                  </div>
                </div>

                
              </article>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
