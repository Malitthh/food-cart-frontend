const Banners = () => {
    return (
        <div className="special-slide">
            <div className="container">
                <ul className="biolife-carousel dots_ring_style" data-slick='{"arrows": false, "dots": true, "slidesMargin": 30, "slidesToShow": 1, "infinite": true, "speed": 800, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 1}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":20, "dots": false}},{"breakpoint":480, "settings":{ "slidesToShow": 1}}]}' >
                    <li>
                        <div className="slide-contain biolife-banner__special">
                            <div className="banner-contain">
                                <div className="media">
                                    <a href="#" className="bn-link">
                                        <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt="" /></figure>
                                    </a>
                                </div>
                                <div className="text-content">
                                    <b className="first-line">Pomegranate</b>
                                    <span className="second-line">Organic Heaven Made</span>
                                    <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                    <div className="product-detail">
                                        <h4 className="product-name">National Fresh Fruit Production</h4>
                                        <div className="price price-contain">
                                            <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                            <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                        </div>
                                        <div className="buttons">
                                            <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">Pomegranate</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="buttons">
                                                <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src="assets/images/home-03/bn_special_org.jpg" width="616" height="483" alt=""/></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">Pomegranate</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="buttons">
                                                <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                </ul>
                <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
                        <b className="txt-show-01" >100%Nature</b>
                        <i className="txt-show-02" >Fresh Fruits</i>
                        <ul className="services-list">
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">1</span>
                                    <span className="biolife-icon icon-beer"></span>
                                    <a className="srv-name" href="#">full stamped product</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">2</span>
                                    <span className="biolife-icon icon-schedule"></span>
                                    <a className="srv-name" href="#">place and delivery on time</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">3</span>
                                    <span className="biolife-icon icon-car"></span>
                                    <a className="srv-name" href="#">Free shipping in the city</a>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Banners;