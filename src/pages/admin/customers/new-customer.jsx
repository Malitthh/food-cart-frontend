import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiUrl, clientBaseURL } from "config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { CustomerSchema } from "../../../schema/customerSchema";

const NewCustomer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();

  const onChangeCategory = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    console.log(e.target.value, e.target.id);
    //validateField("vMakeModel", e.value);
  };

  /**
   * set customer name
   * @param {*} e
   */
  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    let user = userInfo;
    user.role = "customer";
    dispatch(addUserStart(user));
    toast.success("Successfully Added !");

    router.push("/admin/customers");
  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    e.preventDefault();
    const err = validateForm(userInfo, CustomerSchema);
    console.log(err, "errrrr");
    if (err) {
      setErrors(err);
    } else {
      onSubmit();
    }
  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, CustomerSchema);

    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
  };

  return (
    <div className="min-h-full">
      <NavBar />
      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <a href="/admin" className="permal-link">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/customers" className="permal-link">
                Customer
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page"><b>New Customer</b></span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
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
      </main>
    </div>
  );
};

export default NewCustomer;
