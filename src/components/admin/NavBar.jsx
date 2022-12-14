import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logoutStart } from "../../store/auth/actions";

const NavBar = () => {
  const { cart, auth } = useSelector((state) => state);
  const { user, status } = auth;
  const router = useRouter();
  const dispatch = useDispatch();
  const color = user?.role === "supplier" ? "rgb(153 79 14)": ( user?.role === "customer" ? "#8ac353": "black");
  
  useEffect(() => {
    if (status !== "success") router.push("/");
  }, []);

  const logout = () => {
    dispatch(logoutStart());
    localStorage.clear();

    console.log(auth, "user");
    router.push("/");
  };

  return (
    <>
      <header id="header" className="header-area style-01 layout-03">
        <div
          className="header-top bg-main hidden-xs"
          style={{ backgroundColor: color }}
        >
          <div className="container">
            <div className="top-bar left">
              <ul className="horizontal-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    foodcartpvt@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>{user?.role.toUpperCase()} PORTAL</b>
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-bar right">
              <ul className="social-list">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <div className="top-bar right">
                <ul className="social-list">
                  <li>
                    <a href="#">
                      <a href="#">
                        <b>Inquiries</b>
                      </a>{" "}
                      &nbsp;
                      <i className="fa fa-bell" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {status !== "success" ? (
                <ul className="horizontal-menu">
                  <li>
                    <a href="/auth/login" className="login-link">
                      <i className="biolife-icon icon-login"></i>Login/Register
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="horizontal-menu">
                  <li>
                    <a href="" className="login-link">
                      <i className="biolife-icon icon-login"></i>
                      {user.name}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => logout()}
                      className="btn btn-warning btn-sm"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div
          className="header-middle biolife-sticky-object"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                <a href="/" target="_blank" className="biolife-logo">
                  <img
                    src="/assets/images/Logo.jpg"
                    alt="Admin Portal"
                    width="210"
                    height="40"
                  />
                </a>
              </div>
              <div className="col-lg-9 col-md-10 hidden-sm hidden-xs">
                <div className="primary-menu">
                  <ul
                    className="menu biolife-menu clone-main-menu clone-primary-menu"
                    id="primary-menu"
                    data-menuname="main menu"
                  >
                    {user?.role === "supplier" && (
                      <>
                        <li className="menu-item">
                          <a href="/supplier">Dashboard</a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="/supplier/products"
                            className="menu-name"
                            data-title="Product"
                          >
                            All Products
                          </a>
                        </li>

                        <li className="menu-item">
                          <a
                            href="/supplier/products/low-stocks"
                            className="menu-name"
                            data-title="Product"
                          >
                            Low Stock Products
                          </a>
                        </li>

                        <li className="menu-item">
                          <a
                            href="/shop/contact-us"
                            className="menu-name"
                            data-title="Product"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                        </li>

                        <li className="menu-item">
                          <a
                            href={`/supplier/account/${user._id}`}
                            className="menu-name"
                            data-title="Product"
                          >
                            My Profile
                          </a>
                        </li>
                      </>
                    )}
                    {user?.role === "customer" && (
                      <>
                        <li className="menu-item">
                          <a href="/customer">Dashboard</a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="/customer/orders"
                            className="menu-name"
                            data-title="Product"
                          >
                            My Orders
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href={`/customer/account/${user._id}`}
                            className="menu-name"
                            data-title="Product"
                          >
                            My Profile
                          </a>
                        </li>
                      </>
                    )}
                    {user?.role === "admin" && (
                      <>
                        <li className="menu-item">
                          <a href="/admin">Dashboard</a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="/admin/products"
                            className="menu-name"
                            data-title="Product"
                          >
                            Products
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/admin/customers">Customers</a>
                        </li>
                        <li className="menu-item">
                          <a href="/admin/employees">Employees</a>
                        </li>
                        <li className="menu-item">
                          <a href="/admin/suppliers">Suppliers</a>
                        </li>
                        <li className="menu-item">
                          <a href="/admin/orders">Orders</a>
                        </li>
                        <li className="menu-item">
                          <a href="/admin/reports">Reports</a>
                        </li>
                      </>
                    )}
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
