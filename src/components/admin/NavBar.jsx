
const NavBar = () => {
  return (
    <>
    <header id="header" className="header-area style-01 layout-03">
        <div className="header-top bg-main hidden-xs" style={{backgroundColor: '#c49a6e'}}>
            <div className="container">
                <div className="top-bar left">
                    <ul className="horizontal-menu">
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Organic@company.com</a></li>
                        <li><a href="#">ADMIN PORTAL</a></li>
                    </ul>
                </div>
                <div className="top-bar right">
                    <ul className="social-list">
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul className="horizontal-menu">

                        <li><a href="login.html" className="login-link"><i className="biolife-icon icon-login"></i>Login/Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-middle biolife-sticky-object"  style={{backgroundColor: '#3aa353'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                        <a href="/admin" className="biolife-logo"><img src="/assets/images/Logo.jpg" alt="Admin Portal" width="210" height="40"/></a>
                    </div>
                    <div className="col-lg-9 col-md-10 hidden-sm hidden-xs">
                        <div className="primary-menu">
                            <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                                <li className="menu-item"><a href="/admin">Dashboard</a></li>
                                <li className="menu-item"><a href="/admin/products" className="menu-name" data-title="Product" >Products</a></li>
                                <li className="menu-item"><a href="/admin/customers">Customers</a></li>
                                <li className="menu-item"><a href="/admin/">Employees</a></li>
                                <li className="menu-item"><a href="/admin/">Suppliers</a></li>
                                <li className="menu-item"><a href="/admin/orders">Orders</a></li>
                                <li className="menu-item"><a href="/admin/">Reports</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</>
  
  );
};

export default NavBar;
