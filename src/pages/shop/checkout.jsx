import React, { useState, useEffect } from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addOrderStart } from "../../store/orders/actions";
import { useRouter } from "next/router";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { AuthSchema } from "../../schema/authSchema";
import { emptyCart } from "../../store/cart/actions";

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({});
  const [errors, setErrors] = useState([]);

  const [showCheckout, setShowCheckout] = useState(true);
  const { cart, auth } = useSelector((state) => state);
  const { user } = auth;

  const sum = cart.cart.reduce(function (sum, number) {
    return sum + number.price * number.quantity;
  }, 0);

  const checkoutFunc = () => {
    console.log(orderInfo, "orderinfo");
    let shippingAddress = {
      name: orderInfo.recipientName,
      mobile: orderInfo.recipientMobile,
      addressLine1: orderInfo.addressLine1,
      addressLine2: orderInfo.addressLine2,
      city: orderInfo.city,
      postalCode: orderInfo.postalCode,
    };

    let billingAddress = {
      addressLine1: orderInfo.addressLine1B,
      addressLine2: orderInfo.addressLine2B,
      city: orderInfo.cityB,
      postalCode: orderInfo.postalCodeB,
      name: orderInfo.billingName,
      mobile: orderInfo.billingMobile,
    };

    let orderItems = cart.cart;

    let customerName = user.name;
    let customerId = user._id;
    let customerEmail = user.email;

    const OrderData = {
      customerName,
      customerId,
      customerEmail,
      shippingAddress,
      billingAddress,
      orderItems,
    };

    console.log("orderinfo", OrderData, orderItems);

    dispatch(addOrderStart(OrderData));

    setShowCheckout(false)

    dispatch(emptyCart());
  };

  const onChangeInput = (e) => {
    // validateField(e.target.id, e.target.value)
    setOrderInfo({ ...orderInfo, [e.target.id]: e.target.value });
  };

  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, AuthSchema);

    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
  };

  return (
    <>
      <HeaderBar />

      <div className="hero-section hero-background">
        <h1 className="page-title">Checkout</h1>
      </div>

      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <a href="/" className="permal-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">Checkout</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="page-contain checkout">
        <div id="main-content" className="main-content">
          {showCheckout && (
            <div className="container sm-margin-top-37px">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                  <div className="checkout-progress-wrap">
                    <ul className="steps">
                      <li className="step 1st">
                        <div className="checkout-act active">
                          <h3 className="title-box">
                            <span className="number">1</span>Customer
                          </h3>
                          <div className="box-content">
                            <div className="login-on-checkout">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="customerName">
                                    Customer Name{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="customerName"
                                    id="customerName"
                                    value={user.name}
                                    placeholder="Your email"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">Email Address</label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={user.email}
                                    placeholder="Your email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="step 2nd ">
                        <div className="checkout-act active">
                          <h3 className="title-box">
                            <span className="number">2</span>Shipping
                          </h3>
                          <div className="box-content">
                            <div className="login-on-checkout">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="recipientName">
                                    Recipient name{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="recipientName"
                                    id="recipientName"
                                    value={orderInfo.recipientName}
                                    onChange={onChangeInput}
                                    placeholder="Recipient name"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">Recipient mobile</label>
                                  <input
                                    type="text"
                                    name="recipientMobile"
                                    id="recipientMobile"
                                    value={orderInfo.recipientMobile}
                                    onChange={onChangeInput}
                                    placeholder="Recipient Mobile"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine1">
                                    Address Line 1{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="addressLine1"
                                    id="addressLine1"
                                    value={orderInfo.addressLine1}
                                    onChange={onChangeInput}
                                    placeholder="Address Line 1"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine2">
                                    Address Line 2{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="addressLine2"
                                    id="addressLine2"
                                    value={orderInfo.addressLine2}
                                    onChange={onChangeInput}
                                    placeholder="Address Line 2"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="city">City </label>
                                  <br></br>
                                  <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={orderInfo.city}
                                    onChange={onChangeInput}
                                    placeholder="City"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="postalCode">Postal Code</label>
                                  <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    value={orderInfo.postalCode}
                                    onChange={onChangeInput}
                                    placeholder="Postal Code "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="step 3rd">
                        <div className="checkout-act active">
                          <h3 className="title-box">
                            <span className="number">3</span>Billing
                          </h3>
                          <div className="box-content">
                            <div className="login-on-checkout">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="billingName">Billing name </label>
                                  <input
                                    type="text"
                                    name="billingName"
                                    id="billingName"
                                    value={orderInfo.billingName}
                                    onChange={onChangeInput}
                                    placeholder="Billing name"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">Billing mobile</label>
                                  <input
                                    type="text"
                                    name="billingMobile"
                                    id="billingMobile"
                                    value={orderInfo.billingMobile}
                                    onChange={onChangeInput}
                                    placeholder="Billing Mobile"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine1B">
                                    Address Line 1{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="addressLine1B"
                                    id="addressLine1B"
                                    value={orderInfo.addressLine1B}
                                    onChange={onChangeInput}
                                    placeholder="Address Line 1"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine2B">
                                    Address Line 2{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="addressLine2B"
                                    id="addressLine2B"
                                    value={orderInfo.addressLine2B}
                                    onChange={onChangeInput}
                                    placeholder="Address Line 2"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="cityB">City </label>
                                  <br></br>
                                  <input
                                    type="text"
                                    name="cityB"
                                    id="cityB"
                                    value={orderInfo.cityB}
                                    onChange={onChangeInput}
                                    placeholder="City"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="postalCodeB">Postal Code</label>
                                  <input
                                    type="text"
                                    name="postalCodeB"
                                    id="postalCodeB"
                                    value={orderInfo.postalCodeB}
                                    onChange={onChangeInput}
                                    placeholder="Postal Code "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="step 4th">
                        <div className="checkout-act">
                          <h3 className="title-box">
                            <span className="number">4</span>Payment
                          </h3>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="btn-warning btn-sm text-center"
                      onClick={() => checkoutFunc()}
                    >
                      <a className="btn checkout">Check out</a>
                    </div>
                  </div> 
                </div>
                
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 sm-padding-top-48px sm-margin-bottom-0 xs-margin-bottom-15px">
                  <div className="order-summary sm-margin-bottom-80px">
                    <div className="title-block">
                      <h3 className="title">Order Summary</h3>
                      <a href="#" className="link-forward">
                        {cart.cart.length} items
                      </a>
                    </div>
                    <div className="cart-list-box short-type">
                      <ul className="cart-list">
                        {cart.cart &&
                          cart.cart.map((product, key) => (
                            <li className="cart-elem">
                              <div className="cart-item">
                                <div className="product-thumb">
                                  <a className="prd-thumb" href="#">
                                    <figure>
                                      <img
                                        src={product.image}
                                        width="113"
                                        height="113"
                                        alt="shop-cart"
                                      />
                                    </figure>
                                  </a>
                                </div>
                                <div className="info">
                                  <span className="txt-quantity">
                                    {product.quantity}X
                                  </span>
                                  <a href="#" className="pr-name">
                                    {product.productName}
                                  </a>
                                </div>
                                <div className="price price-contain">
                                  <ins>
                                    <span className="price-amount">
                                      <span className="currencySymbol">
                                        LKR
                                      </span>
                                      {product.price * product.quantity}.00
                                    </span>
                                  </ins>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                      <ul className="subtotal">
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name">Subtotal</b>
                            <span className="stt-price">LKR {sum}.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name">Shipping</b>
                            <span className="stt-price">LKR 00.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name">Tax</b>
                            <span className="stt-price">LKR 00.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name">total:</b>
                            <span className="stt-price">LKR {sum}.00</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!showCheckout && (
            <div className="welcome-us-block">
              <div className="container">
                <h4 className="title">Thank You for your order!</h4>
                <div className="text-wraper">
                  <p className="text-info" style={{color:"green"}}>
                 <i>" Thank you for being our valued customer. We hope our product will meet your expectations. Let us know if you have any questions. "</i> 
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
