import React, { useState, useEffect } from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addOrderStart } from "../../store/orders/actions";
import { useRouter } from "next/router";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { OrderSchema } from "../../schema/OrderSchema";
import { emptyCart } from "../../store/cart/actions";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({});
  const [finalOrder, setFinalOrder] = useState({});
  const [errors, setErrors] = useState([]);
  const token = window.localStorage.getItem("@token");
  const [showCheckout, setShowCheckout] = useState(true);
  const { cart, auth } = useSelector((state) => state);
  const { user, status } = auth;

  const sum = cart.cart.reduce(function (sum, number) {
    return sum + number.price * number.quantity;
  }, 0);

  useEffect(() => {
    if (status !== "success") router.push("/shop/cart");
  }, []);
  const checkoutFunc = (OrderData) => {
    const payload = {
      data: OrderData,
      token,
    };
    dispatch(addOrderStart(payload));
    setShowCheckout(false);
    setFinalOrder(OrderData);
    dispatch(emptyCart());
  };

  const validateBeforeSave = (e) => {
    e.preventDefault();

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

    let customerName = user?.name;
    let customerId = user?._id;
    let customerEmail = user?.email;

    const OrderData = {
      customerName,
      customerId,
      customerEmail,
      shippingAddress,
      billingAddress,
      orderItems,
    };

    const err = validateForm(orderInfo, OrderSchema);
    console.log(err, "err");
    if (err) {
      setErrors(err);
    } else {
      checkoutFunc(OrderData);
    }
  };

  const onChangeInput = (e) => {
    validateField(e.target.id, e.target.value);
    setOrderInfo({ ...orderInfo, [e.target.id]: e.target.value });
  };

  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, OrderSchema);

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
                            <span className="number">1</span>Customer Details
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
                                    value={user?.name}
                                    placeholder="Your email"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">Email Address</label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={user?.email}
                                    placeholder="Your email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="step 2nd">
                        <div className="checkout-act active">
                          <h3 className="title-box">
                            <span className="number">2</span>Billing Details
                          </h3>
                          <div className="box-content">
                            <div className="login-on-checkout">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="billingName">Billing Name</label>
                                  <input
                                    type="text"
                                    name="billingName"
                                    id="billingName"
                                    value={orderInfo.billingName}
                                    onChange={onChangeInput}
                                    placeholder="Billing name"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["billingName"]}
                                  </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">Contact No</label>
                                  <input
                                    type="text"
                                    name="billingMobile"
                                    id="billingMobile"
                                    value={orderInfo.billingMobile}
                                    onChange={onChangeInput}
                                    placeholder="Billing Mobile"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["billingMobile"]}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine1B">Address</label>
                                  <input
                                    type="text"
                                    name="addressLine1B"
                                    id="addressLine1B"
                                    value={orderInfo.addressLine1B}
                                    onChange={onChangeInput}
                                    placeholder="Address Line"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["addressLine1B"]}
                                  </p>
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
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["postalCodeB"]}
                                  </p>
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
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["cityB"]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="step 3rd ">
                        <div className="checkout-act active">
                          <h3 className="title-box">
                            <span className="number">3</span>Shipping Details
                          </h3>
                          <p className="text-red-500 text-xs italic">
                          
                          </p>
                          <div className="box-content">
                            <div className="login-on-checkout">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="recipientName">
                                    Recipient Name{" "}
                                  </label>
                                  <input
                                    type="text"
                                    name="recipientName"
                                    id="recipientName"
                                    value={orderInfo.recipientName}
                                    onChange={onChangeInput}
                                    placeholder="Enter name here"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["recipientName"]}
                                  </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="email">
                                    Recipient Contact No
                                  </label>
                                  <input
                                    type="text"
                                    name="recipientMobile"
                                    id="recipientMobile"
                                    value={orderInfo.recipientMobile}
                                    onChange={onChangeInput}
                                    placeholder="Enter contact no here"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["recipientMobile"]}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="addressLine1">Address</label>
                                  <input
                                    type="text"
                                    name="addressLine1"
                                    id="addressLine1"
                                    value={orderInfo.addressLine1}
                                    onChange={onChangeInput}
                                    placeholder="Enter address here"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["addressLine1"]}
                                  </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <label for="postalCode">Postal Code</label>
                                  <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    value={orderInfo.postalCode}
                                    onChange={onChangeInput}
                                    placeholder="Enter postal code here"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["postalCode"]}
                                  </p>
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
                                    placeholder="Enter city here"
                                  />
                                  <p className="text-red-500 text-xs italic">
                                    {errors && errors["city"]}
                                  </p>
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

                    <table>
                      <tbody>
                        <tr class="cart_item wrap-buttons">
                          <td
                            class="wrap-btn-control"
                            colspan="4"
                            style={{ borderColor: "white" }}
                          >
                            <a
                              href="/shop/cart"
                              className="btn-success btn-lg text-center"
                              style={{ float: "left" }}
                            >
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              ></i>
                              &nbsp;&nbsp;<b>Back to My Cart</b>
                            </a>
                            &nbsp;
                            <button
                              className="btn-warning btn-lg text-center"
                              style={{ float: "right" }}
                              onClick={(e) => validateBeforeSave(e)}
                            >
                              <i
                                className="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              &nbsp;&nbsp; <b>Check out</b>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 sm-padding-top-48px sm-margin-bottom-0 xs-margin-bottom-15px">
                  <div className="order-summary sm-margin-bottom-80px">
                    <div className="title-block">
                      <h1 className="title" style={{ color: "yellowgreen" }}>
                        <b>Order Summary</b>
                      </h1>
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
                                    {product.quantity}x
                                  </span>
                                  <a href="#" className="pr-name">
                                    {product.productName}
                                  </a>
                                </div>
                                <div className="price price-contain">
                                  <ins>
                                    <span className="price-amount">
                                      <span className="currencySymbol">
                                        Rs. &nbsp;
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
                            <b className="stt-name">Sub-total</b>
                            <span className="stt-price">Rs. {sum}.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name">Shipping</b>
                            <span className="stt-price">Rs. 00.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b
                              className="stt-name"
                              style={{ fontWeight: "400" }}
                            >
                              Tax
                            </b>
                            <span className="stt-price">Rs. 00.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="subtotal-line">
                            <b className="stt-name" style={{ color: "green" }}>
                              total Amount
                            </b>
                            <span
                              className="stt-price"
                              style={{ color: "red" }}
                            >
                              Rs. {sum}.00
                            </span>
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
                <div style={{ float: "right" }}>
                  <div
                    id="invoice-POS"
                    style={{ width: "35%", marginLeft: "65%" }}
                    ref={ref}
                  >
                    <div id="top">
                      <div style={{ float: "center" }}>
                        <img
                          src="/assets/images/Logo.jpg"
                          width={120}
                          height={15}
                        />
                      </div>
                    </div>{" "}
                    <br />
                    <div id="mid">
                      <div class="info">
                        <p>
                          <b>Name</b> : {finalOrder.customerName}
                          <br />
                          <b>Email</b> : {finalOrder.customerEmail}
                          <br />
                          <b>Phone</b> : {finalOrder.billingAddress.mobile}
                          <br />
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        id="table"
                        style={{
                          height: "200px",
                          overflow: "auto",
                          marginBottom: "1%",
                        }}
                      >
                        <table>
                          <tr
                            class="tabletitle"
                            style={{
                              backgroundColor: "#c3c3c357",
                              fontSize: "10px",
                            }}
                          >
                            <td class="item">
                              <h2>
                                <b>Image</b>
                              </h2>
                            </td>
                            <td class="item">
                              <h2>
                                <b>Item</b>
                              </h2>
                            </td>
                            <td class="Hours">
                              <h2>
                                <b>Qty</b>
                              </h2>
                            </td>
                            <td class="Rate">
                              <h2>
                                <b>Sub Total</b>
                              </h2>
                            </td>
                          </tr>
                          {finalOrder.orderItems.map((product, key) => (
                            <tr class="service">
                              <td class="tableitem">
                                <img
                                  src={product.image}
                                  width={35}
                                  height={10}
                                />
                              </td>
                              <td class="tableitem">
                                <p class="itemtext">{product.productName}</p>
                              </td>
                              <td class="tableitem">
                                <p class="itemtext">{product.quantity}</p>
                              </td>
                              <td class="tableitem">
                                <p class="itemtext">
                                  {product.price * product.quantity}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div id="legalcopy">
                      <p
                        class="legal"
                        style={{
                          marginTop: "18px",
                          color: "#8ac554",
                          fontFamily: "monospace",
                          fontSize: "12px",
                        }}
                      >
                        <strong style={{ color: "#ab6f29" }}>
                          Thank you for your business!
                        </strong>
                        ?? Payment is expected within 31 days; please process
                        this invoice within that time.
                      </p>
                    </div>
                  </div>
                  <Pdf
                    targetRef={ref}
                    filename="receipt.pdf"
                    x={0.5}
                    y={0.5}
                    scale={1}
                  >
                    {({ toPdf }) => (
                      <button
                        onClick={toPdf}
                        className="btn btn-success"
                        style={{
                          float: "right",
                          marginRight: "0.5%",
                          marginTop: "1%",
                          marginBottom: "0.5%",
                          padding: "0.58%",
                        }}
                      >
                        <i className="fa fa-download" aria-hidden="true"></i>
                        &nbsp;&nbsp;Download Receipt
                      </button>
                    )}
                  </Pdf>
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
