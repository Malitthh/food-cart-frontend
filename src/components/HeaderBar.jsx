import { useSelector } from "react-redux";
import { clientBaseURLImages } from "config";

const HeaderBar = () => {
    const { cart, auth } = useSelector((state) => state);
    const { user, status } = auth;

    const sum = cart.cart.reduce(function(sum, number) {
      return sum + number.price*number.quantity;
    }, 0);

    return (
        <>
            <header id="header" className="header-area style-01 layout-03">
                <div className="header-top bg-main hidden-xs">
                    <div className="container">
                        <div className="top-bar left">
                            <ul className="horizontal-menu">
                                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Organic@company.com</a></li>
                                <li><a href="#">Free Shipping for all Order of $99</a></li>
                            </ul>
                        </div>
                        <div className="top-bar right">
                            <ul className="social-list">
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            </ul>
                            {status !== 'success' ?
                            (<ul className="horizontal-menu">
                                <li><a href="/auth/login" className="login-link"><i className="biolife-icon icon-login"></i>Login/Register</a></li>
                            </ul>) : 
                            (<ul className="horizontal-menu">
                                <li><a href="" className="login-link"><i className="biolife-icon icon-login"></i>{user.name}</a></li>
                            </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="header-middle biolife-sticky-object ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                                <a href="/" className="biolife-logo"><img src="/assets/images/Logo.jpg" alt="biolife logo" width="210" height="40"/></a>
                            </div>
                            <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                                <div className="primary-menu">
                                    <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                                        <li className="menu-item"><a href="/">Home</a></li>
                                        <li className="menu-item"><a href="/shop/products" className="menu-name" data-title="Product" >Shop</a></li>
                                        <li className="menu-item"><a href="/shop/contact-us">Contact us</a></li>
                                        <li className="menu-item"><a href="/shop/about-us">About us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                                <div className="biolife-cart-info">
                                    <div className="mobile-search">
                                        <a href="javascript:void(0)" className="open-searchbox"><i className="biolife-icon icon-search"></i></a>
                                        <div className="mobile-search-content">
                                            <form action="#" className="form-search" name="mobile-seacrh" method="get">
                                                <a href="#" className="btn-close"><span className="biolife-icon icon-close-menu"></span></a>
                                                <input type="text" name="s" className="input-text" value="" placeholder="Search here..."/>
                                                    <select name="category">
                                                        <option value="-1" selected>All Categories</option>
                                                        <option value="vegetables">Vegetables</option>
                                                        <option value="fresh_berries">Fresh Berries</option>
                                                        <option value="ocean_foods">Ocean Foods</option>
                                                        <option value="butter_eggs">Butter & Eggs</option>
                                                        <option value="fastfood">Fastfood</option>
                                                        <option value="fresh_meat">Fresh Meat</option>
                                                        <option value="fresh_onion">Fresh Onion</option>
                                                        <option value="papaya_crisps">Papaya & Crisps</option>
                                                        <option value="oatmeal">Oatmeal</option>
                                                    </select>
                                                    <button type="submit" className="btn-submit">go</button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <div className="wishlist-block hidden-sm hidden-xs">
                                        <a href="#" className="link-to">
                                            <span className="icon-qty-combine">
                                                <i className="icon-heart-bold biolife-icon"></i>
                                                <span className="qty">4</span>
                                            </span>
                                        </a>
                                    </div> */}
                                    <div className="minicart-block">
                                        <div className="minicart-contain">
                                            <a href="" className="link-to">
                                                <span className="icon-qty-combine">
                                                    <i className="icon-cart-mini biolife-icon"></i>
                                                    <span className="qty">{cart.numberCart}</span>
                                                </span>
                                                <span className="title">My Cart - </span>
                                                <span className="sub-total">LKR {sum}</span>
                                            </a>
                                            <div className="cart-content">
                                                <div className="cart-inner">
                                                    <ul className="products">
                                                    {cart.cart &&
                                                        cart.cart.map((product, key) => (
                                                        <li>
                                                            <div className="minicart-item">
                                                                <div className="thumb">
                                                                    <a href="#"><img src={product.image} width="90" height="90" alt="National Fresh"/></a>
                                                                </div>
                                                                <div className="left-info">
                                                                    <div className="product-title"><a href="#" className="product-name">{product.productName}</a></div>
                                                                    <div className="price">
                                                                        <ins><span className="price-amount"><span className="currencySymbol">LKR.</span>{product.price*product.quantity}</span></ins>
                                                                    </div>
                                                                    <div className="qty">
                                                                        <label for="cart[id123][qty]">Qty:</label>
                                                                        <input type="number" className="input-qty" name="cart[id123][qty]" id="cart[id123][qty]" value={product.quantity} disabled/>
                                                                    </div>
                                                                </div>
                                                                <div className="action">
                                                                    <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                    <p className="btn-control">
                                                        <a href="/shop/cart" className="btn view-cart">view cart</a>
                                                        <a href="/shop/checkout" className="btn">checkout</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-menu-toggle">
                                        <a className="btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom hidden-sm hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4" >
                                <a href="/shop/products">
                                <div className="vertical-menu vertical-category-block">
                                    <div className="block-title">
                                        <span className="menu-icon">
                                            <span className="line-1"></span>
                                            <span className="line-2"></span>
                                            <span className="line-3"></span>
                                        </span>
                                        <span className="menu-title">Shop Now</span>
                                        <span className="angle" data-tgleclassName="fa fa-shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-lg-9 col-md-8 padding-top-2px">
                                <div className="header-search-bar layout-01">
                                    <form action="#" className="form-search" name="desktop-seacrh" method="get">
                                        <input type="text" name="s" className="input-text" value="" placeholder="Search here..."/>
                                            <select name="category">
                                                <option value="-1" selected>All Categories</option>
                                                <option value="vegetables">Vegetables</option>
                                                <option value="fresh_berries">Fresh Berries</option>
                                                <option value="ocean_foods">Ocean Foods</option>
                                                <option value="butter_eggs">Butter & Eggs</option>
                                                <option value="fastfood">Fastfood</option>
                                                <option value="fresh_meat">Fresh Meat</option>
                                                <option value="fresh_onion">Fresh Onion</option>
                                                <option value="papaya_crisps">Papaya & Crisps</option>
                                                <option value="oatmeal">Oatmeal</option>
                                            </select>
                                            <button type="submit" className="btn-submit"><i className="biolife-icon icon-search"></i></button>
                                    </form>
                                </div>
                                <div className="live-info">
                                    <p className="telephone"><i className="fa fa-phone" aria-hidden="true"></i><b className="phone-number">(+900) 123 456 7891</b></p>
                                    <p className="working-time">Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderBar;