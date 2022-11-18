import React from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";

const aboutUs = () => {
  return (
    <>
      <HeaderBar />
      
      <div className="hero-section hero-background">
        <h1 className="page-title">About Us</h1>
      </div>

      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <a href="index-2.html" className="permal-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">About us</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="page-contain about-us">
        <div id="main-content" className="main-content">
          

          <div className="why-choose-us-block">
            <div className="container">
              <h4 className="box-title">Why Choose us</h4>
              <b className="subtitle">
                Natural food is taken from the world's most modern farms with
                strict safety cycles
              </b>
              <div className="showcase">
                <div className="sc-child sc-left-position">
                  <ul className="sc-list">
                    <li>
                      <div className="sc-element color-01">
                        <span className="biolife-icon icon-fresh-drink"></span>
                        <div className="txt-content">
                          <span className="number">01</span>
                          <b className="title">Always Fresh</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sc-element color-02">
                        <span className="biolife-icon icon-healthy-about"></span>
                        <div className="txt-content">
                          <span className="number">02</span>
                          <b className="title">Overall Healthy</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sc-element color-03">
                        <span className="biolife-icon icon-green-safety"></span>
                        <div className="txt-content">
                          <span className="number">03</span>
                          <b className="title">Encironmental Safety</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sc-child sc-center-position">
                  <figure>
                    <img
                      src="/assets/images/about-us/bn04.jpg"
                      alt=""
                      width="622"
                      height="656"
                    />
                  </figure>
                </div>
                <div className="sc-child sc-right-position">
                  <ul className="sc-list">
                    <li>
                      <div className="sc-element color-04">
                        <span className="biolife-icon icon-capacity-about"></span>
                        <div className="txt-content">
                          <span className="number">04</span>
                          <b className="title">Antioxidant Capacity</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sc-element color-05">
                        <span className="biolife-icon icon-arteries-about"></span>
                        <div className="txt-content">
                          <span className="number">05</span>
                          <b className="title">Good For Arteries</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sc-element color-06">
                        <span className="biolife-icon icon-title"></span>
                        <div className="txt-content">
                          <span className="number">06</span>
                          <b className="title">Quality Standards</b>
                          <p className="desc">
                            Natural products are kept in the best condition to
                            ensure always fresh
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="thankyou-order-block">
            <div className="container">
              <div className="text-wraper">
                <p className="text-info">
                <b><i>Decentralized supply system that let customers buy products online and warehouse managers 
                maintain track of stock levels. Customers are let down by poorly managed inventory, 
                and too much money is locked up in slower sales and warehouses.
                 This method speeds up the process by getting rid of paperwork, human error, 
                 and manual delays. This supply management system will be able to monitor finances, 
                 deliveries, and available inventories; it will also be able to alert a warehouse manager 
                 when it's time to place another order and how much to buy. An online application that
                  focuses on supply control and generation is called a supply management system.</i></b>
                </p>
                <p className="qt-text" style={{color:"#21c821"}}>
                  “Adopting a new healthier lifestyle can involve changing diet to include more 
                  fresh fruit and vegetables as well as increasing levels of exercise.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutUs;
