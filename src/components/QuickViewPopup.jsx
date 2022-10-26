const QuickViewPopup = () => {
    return (
        <div id="biolife-quickview-block" className="biolife-quickview-block">
        <div className="quickview-container">
            <a href="#" className="btn-close-quickview" data-object="open-quickview-block"><span className="biolife-icon icon-close-menu"></span></a>
            <div className="biolife-quickview-inner">
                <div className="media">
                    <ul className="biolife-carousel quickview-for" data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".quickview-nav"}'>
                        <li><img src="assets/images/details-product/detail_01.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_02.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_03.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_04.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_05.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_06.jpg" alt="" width="500" height="500"/></li>
                        <li><img src="assets/images/details-product/detail_07.jpg" alt="" width="500" height="500"/></li>
                    </ul>
                    <ul className="biolife-carousel quickview-nav" data-slick='{"arrows":true,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":3,"slidesToScroll":1,"asNavFor":".quickview-for"}'>
                        <li><img src="assets/images/details-product/thumb_01.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_02.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_03.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_04.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_05.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_06.jpg" alt="" width="88" height="88"/></li>
                        <li><img src="assets/images/details-product/thumb_07.jpg" alt="" width="88" height="88"/></li>
                    </ul>
                </div>
                <div className="product-attribute">
                    <h4 className="title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                    <div className="rating">
                        <p className="star-rating"><span className="width-80percent"></span></p>
                    </div>

                    <div className="price price-contain">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                    </div>
                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.</p>
                    <div className="from-cart">
                        <div className="qty-input">
                            <input type="text" name="qty12554" value="1" data-max_value="20" data-min_value="1" data-step="1"/>
                            <a href="#" className="qty-btn btn-up"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                            <a href="#" className="qty-btn btn-down"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn add-to-cart-btn btn-bold">add to cart</a>
                        </div>
                    </div>

                    <div className="product-meta">
                        <div className="product-atts">
                            <div className="product-atts-item">
                                <b className="meta-title">Categories:</b>
                                <ul className="meta-list">
                                    <li><a href="#" className="meta-link">Milk & Cream</a></li>
                                    <li><a href="#" className="meta-link">Fresh Meat</a></li>
                                    <li><a href="#" className="meta-link">Fresh Fruit</a></li>
                                </ul>
                            </div>
                            <div className="product-atts-item">
                                <b className="meta-title">Tags:</b>
                                <ul className="meta-list">
                                    <li><a href="#" className="meta-link">food theme</a></li>
                                    <li><a href="#" className="meta-link">organic food</a></li>
                                    <li><a href="#" className="meta-link">organic theme</a></li>
                                </ul>
                            </div>
                            <div className="product-atts-item">
                                <b className="meta-title">Brand:</b>
                                <ul className="meta-list">
                                    <li><a href="#" className="meta-link">Fresh Fruit</a></li>
                                </ul>
                            </div>
                        </div>
                        <span className="sku">SKU: N/A</span>
                        <div className="biolife-social inline add-title">
                            <span className="fr-title">Share:</span>
                            <ul className="socials">
                                <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default QuickViewPopup;