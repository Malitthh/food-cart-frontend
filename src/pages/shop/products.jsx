import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductStart } from "../../store/products/actions";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import MainContent_Shop from "src/components/MainContent_Shop";
import ShopItem from "src/components/ShopItems";
import sidebar_Shop from "src/components/Sidebar_shop";

const product = () => {
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;

  const featchOnLoad = async () => {
    dispatch(getProductStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  return (
    <>
      <HeaderBar />
      <div className="hero-section hero-background">
        <h1 className="page-title">Shop</h1>
      </div>
      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <a href="/" className="permal-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="permal-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">All</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">col-4</div>
          <div className="col-md-9">
            <div className="row">
              {allProducts && allProducts.map((product, key) => <ShopItem key={key} product={product}/>)}
            </div>
          </div>
        </div>
      </div> 
  
      <Footer />
    </>
  );
};

export default product;
