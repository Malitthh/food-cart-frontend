import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductStart } from "../../store/products/actions";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import MainContent_Shop from "src/components/MainContent_Shop";
import ShopItem from "src/components/ShopItems";
import sidebar_Shop from "src/components/Sidebar_shop";

const product = () => {
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState([]);

  const featchOnLoad = async () => {
    dispatch(getProductStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };


  return (
    <>
      <HeaderBar />
      <div className="hero-section hero-background">
        <h1 className="page-title">My Profile</h1>
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
              <span className="current-page">My profile</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">    
          <aside id="sidebar" class="sidebar col-lg-8 col-md-4 col-sm-12 col-xs-12">
                    <div class="biolife-mobile-panels">
                        <span class="biolife-current-panel-title">Sidebar</span>
                        <a class="biolife-close-btn" href="#" data-object="open-mobile-filter">&times;</a>
                    </div>
                    <div class="sidebar-contain">
                        <div class="widget biolife-filter">
                            <h4 class="wgt-title">Settings</h4>
                            <div class="wgt-content">
                                <ul class="cat-list">
                                    <li class="cat-list-item"><a href="#" class="cat-link">My Orders</a></li>
                                </ul>
                            </div>
                        </div>     
                    </div>

                </aside>
    
          </div>
          <div className="col-md-8">
            <div className="row">
            <form>
                <div className="form-row col-md-12">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">
                        <b>Name : </b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={onChangeInput}
                        value={userInfo.name}
                        placeholder="Enter your name here"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["name"]}
                      </p>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">
                        <b>Email : </b>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={onChangeInput}
                        value={userInfo.email}
                        placeholder="Enter your email here"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["email"]}
                      </p>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="mobileNo">
                        <b>Contact No : </b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileNo"
                        name="mobileNo"
                        onChange={onChangeInput}
                        value={userInfo.mobileNo}
                        placeholder="Enter your contact no here"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["mobileNo"]}
                      </p>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="nic">
                        <b>NIC : </b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nic"
                        name="nic"
                        onChange={onChangeInput}
                        value={userInfo.nic}
                        placeholder="Enter your NIC here"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["nic"]}
                      </p>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="gender">
                        <b>Gender : </b>
                      </label>
                      <select className="form-control">
                        <option disabled="disabled" selected="true">Select your Gender here</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["dob"]}
                      </p>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="address">
                        <b>Province : </b>
                      </label>
                      <select className="form-control">
                        <option disabled="disabled" selected="true">Select your province here</option>
                        <option value="southern">Southern</option>
                        <option value="central">Central</option>
                        <option value="northwest">North western</option>
                        <option value="uva">Uva</option>
                        <option value="sabaragamuwa">Sabaragamuwa</option>
                        <option value="west">West</option>
                        <option value="eastern">Eastern</option>
                        <option value="northen">Northen</option>
                        <option value="northCentral">North Central</option>
                      </select>
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["province"]}
                      </p>
                      
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="province">
                        <b>Address : </b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangeInput}
                        value={userInfo.address}
                        id="address"
                        name="address"
                        placeholder="Enter your address here"
                      />
                      <p className="text-red-500 text-xs italic">
                        {errors && errors["address"]}
                      </p>
                    </div>
                  </div>
                
                <div className="form-row">      
                  <div className="form-group col-md-6">
                    <label htmlFor="password">
                      <b>Password : </b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.password}
                      id="password"
                      name="password"
                      placeholder="Enter your password here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["password"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="passwordConfirm">
                      <b>Confirm Password : </b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.passwordConfirm}
                      id="passwordConfirm"
                      name="passwordConfirm"
                      placeholder="Re-Enter your password here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["passwordConfirm"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <button
                      data-cy="save-new-report-btn"
                      onClick={(e) => validateBeforeSave(e)}
                      className="btn btn-success"
                    >
                      Save
                    </button>{" "}
                    &nbsp;
                    <button
                      data-cy="save-new-report-btn"
                      onClick={(e) => validateBeforeSave(e)}
                      className="btn btn-warning"
                    >
                      Reset
                    </button> &nbsp;
                    <a 
                    data-cy="link-new-report"
                    href="/admin/customers"
                    className="new-report btn btn-danger gap- btn-sm"
                  > Cancel
                   
                  </a>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
  
      <Footer />
    </>
  );
};

export default product;
