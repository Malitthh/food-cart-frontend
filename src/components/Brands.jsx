import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Brands = () => {
  return (
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
      <div>
        <div className="product-item">
          <div className="contain-product right-info-layout contain-product__right-info-layout">
            <div className="product-thumb">
              <a href="#" className="link-to-product">
                <img
                  src="assets/images/products/p-19.jpg"
                  alt="dd"
                  width="270"
                  height="270"
                  className="product-thumnail"
                />
              </a>
            </div>
            <div className="info">
              <b className="categories">Vegetables</b>
              <h4 className="product-title">
                <a href="#" className="pr-name">
                  Pumpkins Fairytale
                </a>
              </h4>
              <div className="price ">
                <ins>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>85.00
                  </span>
                </ins>
                <del>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>95.00
                  </span>
                </del>
              </div>
              <div className="rating">
                <p className="star-rating">
                  <span className="width-80percent"></span>
                </p>
                <span className="review-count">(05 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="product-item">
          <div className="contain-product right-info-layout contain-product__right-info-layout">
            <div className="product-thumb">
              <a href="#" className="link-to-product">
                <img
                  src="assets/images/products/p-19.jpg"
                  alt="dd"
                  width="270"
                  height="270"
                  className="product-thumnail"
                />
              </a>
            </div>
            <div className="info">
              <b className="categories">Vegetables</b>
              <h4 className="product-title">
                <a href="#" className="pr-name">
                  Pumpkins Fairytale
                </a>
              </h4>
              <div className="price ">
                <ins>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>85.00
                  </span>
                </ins>
                <del>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>95.00
                  </span>
                </del>
              </div>
              <div className="rating">
                <p className="star-rating">
                  <span className="width-80percent"></span>
                </p>
                <span className="review-count">(05 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="product-item">
          <div className="contain-product right-info-layout contain-product__right-info-layout">
            <div className="product-thumb">
              <a href="#" className="link-to-product">
                <img
                  src="assets/images/products/p-19.jpg"
                  alt="dd"
                  width="270"
                  height="270"
                  className="product-thumnail"
                />
              </a>
            </div>
            <div className="info">
              <b className="categories">Vegetables</b>
              <h4 className="product-title">
                <a href="#" className="pr-name">
                  Pumpkins Fairytale
                </a>
              </h4>
              <div className="price ">
                <ins>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>85.00
                  </span>
                </ins>
                <del>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>95.00
                  </span>
                </del>
              </div>
              <div className="rating">
                <p className="star-rating">
                  <span className="width-80percent"></span>
                </p>
                <span className="review-count">(05 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="product-item">
          <div className="contain-product right-info-layout contain-product__right-info-layout">
            <div className="product-thumb">
              <a href="#" className="link-to-product">
                <img
                  src="assets/images/products/p-19.jpg"
                  alt="dd"
                  width="270"
                  height="270"
                  className="product-thumnail"
                />
              </a>
            </div>
            <div className="info">
              <b className="categories">Vegetables</b>
              <h4 className="product-title">
                <a href="#" className="pr-name">
                  Pumpkins Fairytale
                </a>
              </h4>
              <div className="price ">
                <ins>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>85.00
                  </span>
                </ins>
                <del>
                  <span className="price-amount">
                    <span className="currencySymbol">£</span>95.00
                  </span>
                </del>
              </div>
              <div className="rating">
                <p className="star-rating">
                  <span className="width-80percent"></span>
                </p>
                <span className="review-count">(05 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Brands;
