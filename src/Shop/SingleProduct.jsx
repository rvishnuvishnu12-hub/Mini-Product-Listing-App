import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productData from "../products.json"; // ✅ JSON IMPORT

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

import ProductDisplay from "./ProductDisplay";

const SingleProduct = () => {
  const { id } = useParams();

  // Filter product from imported JSON
  const result = productData.filter(
    (p) => String(p.id) === String(id)
  );

  return (
    <div>
      <PageHeader
        title={"OUR SHOP SINGLE"}
        curPage={"Shop / Single Product"}
      />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">

            {/* LEFT SIDE */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">

                    {/* IMAGE SLIDER */}
                    <div className="col-md-6 col-12">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}                 // ✅ FIX
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        navigation={{
                          prevEl: ".pro-single-prev",
                          nextEl: ".pro-single-next", // ✅ FIX
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                      >
                        {result.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="single-thumb">
                              <img
                                src={item.img}
                                alt={item.name}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* SLIDER BUTTONS */}
                      <div className="pro-single-prev">
                        <i className="icofont-rounded-left"></i>
                      </div>
                      <div className="pro-single-next">
                        <i className="icofont-rounded-right"></i>
                      </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="col-md-6 col-12">
                      {result.map((item) => (
                        <ProductDisplay
                          key={item.id}
                          item={item}
                        />
                      ))}
                    </div>

                  </div>
                </div>

                {/* REVIEW SECTION */}
                <div className="Review">Review</div>
              </article>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 col-12">
              Right side
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
