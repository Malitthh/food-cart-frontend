import React, { useState, useEffect } from "react";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { loginStart } from "../../store/auth/actions";
import { useRouter } from "next/router";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { AuthSchema } from "../../schema/authSchema";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const { auth } = useSelector((state) => state);
  const { status, user, getError } = auth;

  useEffect(() => {
    if (status === "success") {
      if (user.role === "admin") {
        router.push("/admin");
      } else if (user.role === "supplier") {
        router.push("/supplier");
      } else {
        router.push("/");
      }
    } else {
      // if(getError !== null) {
      //     toast.error(getError.message);
      // }
    }
  }, [auth]);

  const login = () => {
    console.log("hi", authInfo);
    dispatch(loginStart(authInfo));
  };

  const onChangeInput = (e) => {
    validateField(e.target.id, e.target.value);
    setAuthInfo({ ...authInfo, [e.target.id]: e.target.value });
  };

  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, AuthSchema);

    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
  };

  const validateBeforeSave = () => {
    const err = validateForm(authInfo, AuthSchema);
    console.log(err, "errrrr");
    if (err) {
      setErrors(err);
    } else {
      login();
    }
  };

  return (
    <>
      <HeaderBar />

      <div className="hero-section hero-background">
        <h1 className="page-title">Authentication</h1>
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
              <span className="current-page">Authentication</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="page-contain login-page">
        <div id="main-content" className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="signin-container">
                  <form action="#" name="frm-login" method="post">
                    <p className="form-row">
                      <label for="fid-name">
                        Email Address:<span className="requite">*</span>
                      </label>
                      <input
                        required
                        id="email"
                        type="email"
                        onChange={onChangeInput}
                        value={authInfo.email}
                        className="txt-input"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["email"]}
                      </p>
                    </p>
                    <p className="form-row">
                      <label for="fid-pass">
                        Password:<span className="requite">*</span>
                      </label>
                      <input
                        required
                        id="password"
                        type="password"
                        onChange={onChangeInput}
                        value={authInfo.password}
                        className="txt-input"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["password"]}
                      </p>
                    </p>
                    <p className="form-row wrap-btn">
                      <button
                        className="btn btn-submit btn-bold"
                        type="button"
                        onClick={() => validateBeforeSave()}
                      >
                        sign in
                      </button>
                      <a href="#" className="link-to-help">
                        Forgot your password
                      </a>
                    </p>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="register-in-container">
                  <div className="intro">
                    <h4 className="box-title">New Customer?</h4>
                    <p className="sub-title">
                      Create an account as a customer:
                    </p>
                    <ul className="lis">
                      {/* <li>Check out faster</li>
                      <li>Access your order history</li>
                      <li>Track new orders</li>
                      <li>Save items to your Wishlist</li> */}
                    </ul>
                    <a href="/auth/reg-customer" class="btn btn-bold">
                      Become a Customer
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="register-in-container">
                  <div className="intro">
                    <h4 className="box-title">New Supplier?</h4>
                    <p className="sub-title">
                      Create an account as a supplier:
                    </p>
                    <ul className="lis">
                      {/* <li>Check out faster</li>
                      <li>Access your order history</li>
                      <li>Track new orders</li>
                      <li>Save items to your Wishlist</li> */}
                    </ul>
                    <a href="/auth/reg-supplier" class="btn btn-bold">
                      Become a Supplier
                    </a>
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

export default Login;
