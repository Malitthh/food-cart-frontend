import React from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";

const aboutUs = () => {
  return (
    <>
      <HeaderBar />
      
      <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
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
          <div className="welcome-us-block">
            <div className="container">
              <h4 className="title">Welcome to Biolife store!</h4>
              <div className="text-wraper">
                <p className="text-info">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                </p>
                <p className="qt-text">
                  “There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.”
                </p>
              </div>
            </div>
          </div>

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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutUs;
