import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiUrl, clientBaseURL } from "config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { ProductSchema } from "../../../schema/productSchema";

const NewCustomer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();
  /**
   * set image
   * @param {*} e
   * @returns
   */
  const handleImageFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  /**
   * Remove added image before upload
   * @param {*} i
   */
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  /**
   * set vehicle makde and model
   * @param {*} e
   */
  const onChangeCategory = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    console.log(e.target.value, e.target.id);
    //validateField("vMakeModel", e.value);
  };

  /**
   * set customer name, mobile no and vehicle no
   * @param {*} e
   */
  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    //validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {

    let user = userInfo;
    user.role = 'customer';
    dispatch(addUserStart(user));
    toast.success("Successfully Added !");

   // router.push("/admin/products");

  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    e.preventDefault();
    console.log(userInfo, "pp");
    onSubmit();

  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, ProductSchema);

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
              <span className="current-page">Customers</span>
            </li>
          </ul>
          <div style={{ float: "right" }}>
            <a
              data-cy="link-new-report"
              href="/admin/customers/new-customer"
              className="new-report btn btn-primary gap-2 btn-sm"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              &nbsp;&nbsp;New Customer
            </a>
          </div>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name"><b>Name</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={onChangeInput}
                      value={userInfo.name}
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["name"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={onChangeInput}
                      value={userInfo.email}
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["email"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name"><b>Mobile No</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobileNo"
                      name="mobileNo"
                      onChange={onChangeInput}
                      value={userInfo.mobileNo}
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["mobileNo"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="nic"><b>NIC</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={onChangeInput}
                      value={userInfo.nic}
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["nic"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="gender"><b>Gender</b>
                    </label>
                    <select className="form-control">
                      <option disabled>Select your Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["dob"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="address"><b>Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.address}
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Enter your address here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["address"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="province"><b>Province</b>
                    </label>
                    <select className="form-control">
                      <option disabled>Select your Province</option>
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
                      {errors && errors["dob"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="address"><b>Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.address}
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Enter your address here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["address"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.password}
                      id="password"
                      name="password"
                      placeholder=""
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["password"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="passwordConfirm"><b>Confirm Password</b></label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=""
                      onChange={onChangeInput}
                      value={userInfo.passwordConfirm}
                      id="passwordConfirm"
                      name="passwordConfirm"
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
                  </button> &nbsp;
                  <button
                    data-cy="save-new-report-btn"
                    onClick={(e) => validateBeforeSave(e)}
                    className="btn btn-warning"
                  >
                    Reset
                  </button>
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
