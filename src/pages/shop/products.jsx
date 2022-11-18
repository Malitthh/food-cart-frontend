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
          <div className="col-md-3">     
          <aside id="sidebar" class="sidebar col-lg-8 col-md-4 col-sm-12 col-xs-12">
                    <div class="biolife-mobile-panels">
                        <span class="biolife-current-panel-title">Sidebar</span>
                        <a class="biolife-close-btn" href="#" data-object="open-mobile-filter">&times;</a>
                    </div>
                    <div class="sidebar-contain">
                        <div class="widget biolife-filter">
                            <h3 class="wgt-title"><b>Categories List</b></h3>
                            <div class="wgt-content">
                                <ul class="cat-list">
                                    <li class="cat-list-item"><a href="#" class="cat-link">Fruits & Nuts</a></li>
                                    <li class="cat-list-item"><a href="#" class="cat-link">Vegetables</a></li>
                                    <li class="cat-list-item"><a href="#" class="cat-link">Butter & Eggs</a></li>
                                    <li class="cat-list-item"><a href="#" class="cat-link">Berries</a></li>
                                    <li class="cat-list-item"><a href="#" class="cat-link">Rice</a></li>
                                </ul>
                            </div>
                        </div>     
                    </div>
                </aside>
          </div>
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
