const FooterForMobile = () => {
    return (
        <>
        <div className="mobile-footer">
            <div className="mobile-footer-inner">
                <div className="mobile-block block-menu-main">
                    <a className="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="">
                        <span className="fa fa-bars"></span>
                        <span className="text">Menu</span>
                    </a>
                </div>
                <div className="mobile-block block-sidebar">
                <a className="menu-bar filter-toggle btn-toggle" data-object="open-mobile-filter" href="">
                    <i className="fa fa-sliders" aria-hidden="true"></i>
                    <span className="text">Sidebar</span>
                </a>
            </div>
            <div className="mobile-block block-minicart">
                <a className="link-to-cart" href="#">
                    <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                    <span className="text">Cart</span>
                </a>
            </div>
            <div className="mobile-block block-global">
                <a className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="">
                    <span className="fa fa-globe"></span>
                    <span className="text">Global</span>
                </a>
            </div>
            </div>
        </div>

    <div className="mobile-block-global">
    <div className="biolife-mobile-panels">
            <span className="biolife-current-panel-title">Global</span>
            <a className="biolife-close-btn" data-object="global-panel-opened" href="#">&times;</a>
        </div>
        <div className="block-global-contain">
            <div className="glb-item my-account">
                <b className="title">My Account</b>
                <ul className="list">
                    <li className="list-item"><a href="#">Login/register</a></li>
                    <li className="list-item"><a href="#">Wishlist <span className="index">(8)</span></a></li>
                    <li className="list-item"><a href="#">Checkout</a></li>
                </ul>
            </div>
            <div className="glb-item currency">
                <b className="title">Currency</b>
                <ul className="list">
                    <li className="list-item"><a href="#">€ EUR (Euro)</a></li>
                    <li className="list-item"><a href="#">$ USD (Dollar)</a></li>
                    <li className="list-item"><a href="#">£ GBP (Pound)</a></li>
                    <li className="list-item"><a href="#">¥ JPY (Yen)</a></li>
                </ul>
            </div>
            <div className="glb-item languages">
                <b className="title">Language</b>
                <ul className="list inline">
                    <li className="list-item"><a href="#"><img src="assets/images/languages/us.jpg" alt="flag" width="24" height="18"/></a></li>
                    <li className="list-item"><a href="#"><img src="assets/images/languages/fr.jpg" alt="flag" width="24" height="18"/></a></li>
                    <li className="list-item"><a href="#"><img src="assets/images/languages/ger.jpg" alt="flag" width="24" height="18"/></a></li>
                    <li className="list-item"><a href="#"><img src="assets/images/languages/jap.jpg" alt="flag" width="24" height="18"/></a></li>
                </ul>
            </div>
        </div>

    </div>
    
    </>
    )
}

export default FooterForMobile;