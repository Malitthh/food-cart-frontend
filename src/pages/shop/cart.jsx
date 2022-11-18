import React, { useState, useEffect } from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../../store/cart/actions";
import { useRouter } from "next/router";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { AuthSchema } from "../../schema/authSchema";

const Cart = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [errors, setErrors] = useState([]);
    const { cart } = useSelector((state) => state);
    const [myCart, setMyCart] = useState(cart);
    const countStateArray = React.useState(0);
    const count = countStateArray[0];
    const setCount = countStateArray[1];

    const sum = cart.cart.reduce(function(sum, number) {
      return sum + number.price*number.quantity;
    }, 0);

    // useEffect(() => {
    //     if(status === "success")

    //     if(user.role === "admin") {
    //       router.push("/admin");
    //     } else {
    //       router.push("/");
    //     }
    // }, [auth]);

    const increase = (product) => {
      dispatch(incrementQty(product))
      
    }; 
    
    const decrease = (product) =>  {
      dispatch(decrementQty(product))
    }

    const login = () => {
 
    };
    
    const onChangeInput = (e) => {
        validateField(e.target.id, e.target.value)
        setAuthInfo({ ...authInfo, [e.target.id]: e.target.value });
    };
    
    const validateField = (name, value) => {
        const errMsg = validateProperty(name, value, AuthSchema)
    
        if(errMsg) {
          errors[name] = errMsg;
        } else {
          delete errors[name]
        }
    }

  return (
    <>
      <HeaderBar />

      <div className="hero-section hero-background">
        <h1 className="page-title">Cart</h1>
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
              <span className="current-page">Cart</span>
            </li>
          </ul>
        </nav>
      </div>
        <div className="page-contain shopping-cart">
            <div id="main-content" className="main-content">
                <div className="container">
                    <div className="shopping-cart-container" style={{marginBottom: '20px'}}>
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <h3 className="box-title">Your cart items</h3>
                                <form className="shopping-cart-form" action="#" method="post">
                                    <table className="shop_table cart-form">
                                        <thead>
                                        <tr style={{backgroundColor:"#ecf0e2"}}>
                                            <th className="product-name">Product Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cart.cart && cart.cart.map((product, key) => (
                                        <tr className="cart_item">
                                            <td className="product-thumbnail" data-title="Product Name">
                                                <a className="prd-thumb" href="#">
                                                    <figure><img width="113" height="113" src={product.image} alt="shipping cart"/></figure>
                                                </a>
                                                <a className="prd-name" href="#">{product.productName}</a>
                                                {/* <div className="action">
                                                    <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div> */}
                                            </td>
                                            <td className="product-price" data-title="Price">
                                                <div className="price price-contain">
                                                    <ins><span className="price-amount"><span className="currencySymbol">LKR </span>{product.price}</span></ins>
                                                </div>
                                            </td>
                                            <td className="product-quantity" data-title="Quantity">
                                                <div className="quantity-box type1">
                                                    <div className="qty-input">
                                                        <input type="text" name="qty12554" value={product.quantity} data-max_value="5" data-min_value="1" data-step="1"/>
                                                        <span onClick={()=>increase(product)} className="qty-btn btn-up"><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                                                        <span onClick={()=>decrease(product)} className="qty-btn btn-down"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal" data-title="Total">
                                                <div className="price price-contain">
                                                    <ins><span className="price-amount"><span className="currencySymbol">LKR </span>{product.price*product.quantity}</span></ins>
                                                </div>
                                            </td>
                                            <td>
                                            <div className="action">
                                                    <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>))}
                                    
                                        <tr className="cart_item wrap-buttons">
                                            <td className="wrap-btn-control" colspan="4">
                                                <a href="/shop/products" className="btn back-to-shop">Back to Shop</a>
                                                <div className="btn-checkoutcart">
                                                  <a href="/shop/checkout" className="btn checkoutcart">Check out</a>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div> 
                             <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div className="shpcart-subtotal-block" style={{marginTop:"25%", paddingTop:"10%", paddingTop:"10%"}}>
                                    <div className="subtotal-line">
                                        <b className="stt-name" style={{color:"red", fontSize:"18px"}}>Total Amount<span className="sub"></span></b>
                                        <span className="stt-price">LKR {sum}.00</span>
                                    </div>
                                    <p className="pickup-info"><b>Free Pickup</b> is available as soon as today More about shipping and pickup</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
      <Footer />
    </>
  );
};

export default Cart;
