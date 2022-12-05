
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logoutStart } from "../../store/auth/actions";
import Footer from "../../components/supplier/Footer";


const supplierHome = () => {

  return (
    <>
      <header id="header" className="header-area style-01 layout-03">
        <div
          className="header-top bg-main hidden-xs"
          style={{ backgroundColor: "#db53cd" }}
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
                  <a href="#"><b>SUPPLIER PORTAL</b></a>
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
                  <a href="/NavBar">
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
                   <a href="#"><b>Inquiries</b></a> &nbsp;
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              </div>
              <ul className="horizontal-menu">
                  <li>
                    <a href="/auth/login" className="login-link">
                      <i className="biolife-icon icon-login"></i>Bossa
                    </a>
                  </li>
                </ul>
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
            </div>
          </div>
        </div>
      </header>
    
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <form>
                <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="category"><b>Category : </b></label>
                    <select selected="true"
                      id="category"
                      className="form-control"
                    //   onChange={onChangeCategory}
                    //   value={productInfo.category}
                    >
                      <option selected disabled>Choose a Category</option>
                      <option value="fruit_nuts">Fruit & Nuts</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="berries">Berries</option>
                      <option value="butter_eggs">Butter & Eggs</option>
                      <option value="rice">Rice</option>
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["category"]} */}
                    </p>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="category"><b>Product Name : </b></label>
                    <select selected="true"
                      id="category"
                      className="form-control"
                    //   onChange={onChangeCategory}
                    //   value={productInfo.category}
                    >
                      <option selected disabled>Choose a product name</option>
                      <option value="fruit_nuts">Fruit & Nuts</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="berries">Berries</option>
                      <option value="butter_eggs">Butter & Eggs</option>
                      <option value="rice">Rice</option>
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["category"]} */}
                    </p>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="stock"><b>Cost Price: </b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                    //   onChange={onChangeInput}
                    //   value={productInfo.stock}
                      placeholder="cost price"
                    />
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["stock"]} */}
                    </p>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="stock"><b>Quantity (Kg/Qty)</b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                    //   onChange={onChangeInput}
                    //   value={productInfo.stock}
                      placeholder="Enter your quantity"
                    />
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["stock"]} */}
                    </p>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="stock"><b>Total Amount: </b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                    //   onChange={onChangeInput}
                    //   value={productInfo.stock}
                      placeholder="Total amount"
                    />
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["stock"]} */}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                 
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="costPrice"><b>Remarks</b></label>
                    <input
                      type="text"
                      className="form-control"
                    //   onChange={onChangeInput}
                    //   value={productInfo.description}
                      id="description"
                      name="description"
                      placeholder="Write some remarks here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["description"]} */}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="images"><b>Images</b></label>
                    <input
                      type="file"
                    //   onChange={handleImageFile}
                      className="form-control"
                      multiple="multiple"
                      name="files[]" 
                    />
                    <p className="text-red-500 text-xs italic">
                      {/* {errors && errors["photos"]} */}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {/* {files.map((file, key) => {
                        return (
                          <div key={key} className="overflow-hidden relative">
                            <i
                              onClick={() => {
                                removeImage(file.name);
                              }}
                              className="fa fa-close absolute right-1 hover:text-white cursor-pointer"
                            ></i>
                            <img
                              style={{ height: "100px" }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                        );
                      })} */}
                    </div>
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
                  </button> &nbsp;
                  <button
                    data-cy="save-new-report-btn"
                    // onClick={(e) => validateBeforeSave(e)}
                    className="btn btn-warning"
                  >
                    Reset
                  </button> &nbsp;
                  <a 
                    style={{padding:"6px", fontSize:"13px"}}
                    data-cy="link-new-report"
                    href="/admin/products"
                    className="new-report btn btn-danger gap- btn-sm"
                  > Cancel
                   
                  </a>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </>
  );
};

export default supplierHome;
