const ProductTabs = () => {
    return (
        <>
            <div className="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
                <div className="container">
                    <div className="biolife-title-box">
                        <span className="subtitle">All the best item for You</span>
                        <h3 className="main-title">Related Products</h3>
                    </div>
                    <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
                        <div className="tab-head tab-head__icon-top-layout icon-top-layout">
                            <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                                <li className="tab-element active">
                                    <a href="#tab01_1st" className="tab-link"><span className="biolife-icon icon-lemon"></span>Oranges</a>
                                </li>
                                <li className="tab-element" >
                                    <a href="#tab01_2nd" className="tab-link"><span className="biolife-icon icon-grape2"></span>Grapes</a>
                                </li>
                                <li className="tab-element" >
                                    <a href="#tab01_3rd" className="tab-link"><span className="biolife-icon icon-blueberry"></span>Blueberries</a>
                                </li>
                                <li className="tab-element" >
                                    <a href="#tab01_4th" className="tab-link"><span className="biolife-icon icon-orange"></span>Lemon</a>
                                </li>
                                <li className="tab-element" >
                                    <a href="#tab01_5th" className="tab-link"><span className="biolife-icon icon-broccoli"></span>Vegetables</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                      
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductTabs;