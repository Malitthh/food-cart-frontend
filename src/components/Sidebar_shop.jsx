import React from "react";

const sidebar_Shop = () => {
    return (
        // <!-- Sidebar -->
                <aside id="sidebar" className="sidebar col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className="biolife-mobile-panels">
                        <span className="biolife-current-panel-title">Sidebar</span>
                        <a className="biolife-close-btn" href="#" data-object="open-mobile-filter">&times;</a>
                    </div>
                    <div className="sidebar-contain">
                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Departements</h4>
                            <div className="wgt-content">
                                <ul className="cat-list">
                                    <li className="cat-list-item"><a href="#" className="cat-link">Organic Food</a></li>
                                    <li className="cat-list-item"><a href="#" className="cat-link">Fresh Fruit</a></li>
                                    <li className="cat-list-item"><a href="#" className="cat-link">Dried Fruits</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Shipping & Pickup</h4>
                            <div className="wgt-content">
                                <ul className="cat-list">
                                    <li className="cat-list-item"><a href="#" className="cat-link">Show all</a></li>
                                    <li className="cat-list-item"><a href="#" className="cat-link">2- Day shipping</a></li>
                                    <li className="cat-list-item"><a href="#" className="cat-link">Shop to Home</a></li>
                                    <li className="cat-list-item"><a href="#" className="cat-link">Free Pickup</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget price-filter biolife-filter">
                            <h4 className="wgt-title">Price</h4>
                            <div className="wgt-content">
                                <div className="frm-contain">
                                    <form action="#" name="price-filter" id="price-filter" method="get">
                                        <p className="f-item">
                                            <label htmlFor="pr-from">$</label>
                                            <input className="input-number" type="number" id="pr-from" value="" name="price-from"/>
                                        </p>
                                        <p className="f-item">
                                            <label htmlFor="pr-to">to $</label>
                                            <input className="input-number" type="number" id="pr-to" value="" name="price-from"/>
                                        </p>
                                        <p className="f-item"><button className="btn-submit" type="submit">go</button></p>
                                    </form>
                                </div>
                                <ul className="check-list bold single">
                                    <li className="check-list-item"><a href="#" className="check-link">$0 - $5</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">$5 - $10</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">$15 - $20</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Brand</h4>
                            <div className="wgt-content">
                                <ul className="check-list multiple">
                                    <li className="check-list-item"><a href="#" className="check-link">Great Value Organic</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">Plum Organic</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">Shop to Home</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Color</h4>
                            <div className="wgt-content">
                                <ul className="color-list">
                                    <li className="color-item"><a href="#" className="c-link"><span className="symbol img-color"></span>Multi</a></li>
                                    <li className="color-item"><a href="#" className="c-link"><span className="symbol hex-code color-01"></span>Red</a></li>
                                    <li className="color-item"><a href="#" className="c-link"><span className="symbol hex-code color-02"></span>Orrange</a></li>
                                    <li className="color-item"><a href="#" className="c-link"><span className="symbol hex-code color-03"></span>Other</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Popular Size</h4>
                            <div className="wgt-content">
                                <ul className="check-list bold multiple">
                                    <li className="check-list-item"><a href="#" className="check-link">8oz</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">15oz</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">6oz</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">30oz</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Number of Pieces</h4>
                            <div className="wgt-content">
                                <ul className="check-list bold">
                                    <li className="check-list-item"><a href="#" className="check-link">1 to 9</a></li>
                                    <li className="check-list-item"><a href="#" className="check-link">10 to 15</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Recently Viewed</h4>
                            <div className="wgt-content">
                                <ul className="products">
                                    <li className="pr-item">
                                        <div className="contain-product style-widget">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product" tabindex="0">
                                                    <img src="assets/images/products/p-13.jpg" alt="dd" width="270" height="270" className="product-thumnail"/>
                                                </a>
                                            </div>
                                            <div className="info">
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name" tabindex="0">National Fresh Fruit</a></h4>
                                                <div className="price">
                                                    <ins><span className="price-amount"><span className="currencySymbol">??</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">??</span>95.00</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pr-item">
                                        <div className="contain-product style-widget">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product" tabindex="0">
                                                    <img src="assets/images/products/p-14.jpg" alt="dd" width="270" height="270" className="product-thumnail"/>
                                                </a>
                                            </div>
                                            <div className="info">
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name" tabindex="0">National Fresh Fruit</a></h4>
                                                <div className="price">
                                                    <ins><span className="price-amount"><span className="currencySymbol">??</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">??</span>95.00</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pr-item">
                                        <div className="contain-product style-widget">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product" tabindex="0">
                                                    <img src="assets/images/products/p-10.jpg" alt="dd" width="270" height="270" className="product-thumnail"/>
                                                </a>
                                            </div>
                                            <div className="info">
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name" tabindex="0">National Fresh Fruit</a></h4>
                                                <div className="price">
                                                    <ins><span className="price-amount"><span className="currencySymbol">??</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">??</span>95.00</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget biolife-filter">
                            <h4 className="wgt-title">Product Tags</h4>
                            <div className="wgt-content">
                                <ul className="tag-cloud">
                                    <li className="tag-item"><a href="#" className="tag-link">Fresh Fruit</a></li>
                                    <li className="tag-item"><a href="#" className="tag-link">Natural Food</a></li>
                                    <li className="tag-item"><a href="#" className="tag-link">Hot</a></li>
                                    <li className="tag-item"><a href="#" className="tag-link">Organics</a></li>
                                    <li className="tag-item"><a href="#" className="tag-link">Dried Organic</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </aside>
    )
}

export default sidebar_Shop;