import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductStart } from "../store/products/actions";
import { apiUrl, clientBaseURLImages } from "config";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductTabs = () => {
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;
  const [category, setCategory] = useState("fruit_nuts");
  const [showAll, setShowAll] = useState(true);

  const featchOnLoad = async () => {
    dispatch(getProductStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  const currentCategory = (category) => {
    setCategory(category);
    setShowAll(false);
  };

  const resetCategory = () => {
    setCategory("");
    setShowAll(true);
  };

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).replace('_',' & ');
  }

  return (
    <>
      <div className="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
        <div className="container">
          <div className="biolife-title-box">
            <span className="subtitle" style={{ fontSize: "25px" }}>
              All the best item for You
            </span>
            <h3 className="main-title" style={{ fontSize: "60px" }}>
              Related Products
            </h3>
          </div>
          <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
            <div className="tab-head tab-head__icon-top-layout icon-top-layout">
              <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                <li
                  className={`tab-element  ${
                    category === "fruit_nuts" ? "active" : ""
                  }`}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => currentCategory("fruit_nuts")}
                    className="tab-link"
                  >
                    <span className="biolife-icon icon-lemon"></span>Fruits &
                    Nuts
                  </a>
                </li>
                <li
                  className={`tab-element  ${
                    category === "butter_eggs" ? "active" : ""
                  }`}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => currentCategory("butter_eggs")}
                    className="tab-link"
                  >
                    <span className="biolife-icon icon-grape2"></span>Butter &
                    Eggs
                  </a>
                </li>
                <li
                  className={`tab-element  ${
                    category === "berries" ? "active" : ""
                  }`}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => currentCategory("berries")}
                    className="tab-link"
                  >
                    <span className="biolife-icon icon-blueberry"></span>Berries
                  </a>
                </li>
                <li
                  className={`tab-element  ${
                    category === "vegetables" ? "active" : ""
                  }`}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => currentCategory("vegetables")}
                    className="tab-link"
                  >
                    <span className="biolife-icon icon-broccoli"></span>
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                //  customTransition="all .5"
                //transitionDuration={500}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {allProducts &&
                  allProducts
                    .filter((product) => product.category === category)
                    .map((product, key) => (
                      <div key={key}>
                        <div className="product-item">
                          <div className="contain-product right-info-layout contain-product__right-info-layout">
                            <div className="product-thumb">
                              <a href="#" className="link-to-product">
                                <img
                                  src={`${clientBaseURLImages}${product.photos[0]?.url}`}
                                  alt={product.productName}
                                  width="270"
                                  height="270"
                                  className="product-thumnail"
                                />
                              </a>
                            </div>
                            <div className="info">
                              {/* <b className="categories">{capitalizeFirstLetter(product.category)}</b> */}
                              <h4 className="product-title">
                                <a href="#" className="pr-name">
                                  <span>{product.productName}</span>
                                </a>
                              </h4>
                              <div className="price ">
                                <ins>
                                  <span className="price-amount">
                                  <span className="currencySymbol">LKR</span>&nbsp;{product.price}
                                  </span>
                                </ins>
                              </div>
                              {/* <div className="rating">
                                <p className="star-rating">
                                  <span className="width-80percent"></span>
                                </p>
                                <span className="review-count">
                                  (05 Reviews)
                                </span>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
