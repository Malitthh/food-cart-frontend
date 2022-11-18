import React from "react";
import { apiUrl, clientBaseURLImages } from "config";
import { addToCart } from "../store/cart/actions";
import { useDispatch } from "react-redux";

const ShopItem = ({product}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    console.log(product, "pro")
    dispatch(addToCart(product));
   // toast.success("Successfully Added !");
  }

  return (
    <div className="product-item col-lg-3 col-md-3 col-sm-3 col-xs-6">
      <div className="contain-product layout-default">
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
          <h4 className="product-title">
            <a href="#" className="pr-name">
            <span>{product.productName}</span>
            </a>
          </h4>
          <div className="price">
            <ins>
              <span className="price-amount">
                <span className="currencySymbol">LKR</span>&nbsp;{product.price}
              </span>
            </ins>
            <del>
              <span className="price-amount">
              </span>
            </del>
          </div>
          <div className="shipping-info">
            <p className="shipping-day">3-Day Shipping</p>
            <p className="for-today">Free Pickup Today</p>
          </div>
          <div className="slide-down-box">
            <p className="message">
              All products are carefully selected to ensure food safety.
            </p>
            <div className="buttons">
              <a href="#" className="btn wishlist-btn">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
              <a href="#" className="btn add-to-cart-btn" onClick={() => onAddToCart()}>
                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                add to cart
              </a>
              <a href="#" className="btn compare-btn">
                <i className="fa fa-random" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
