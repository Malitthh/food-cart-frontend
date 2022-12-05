import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUserStart, updateUserStart } from "../../store/users/actions";
import HeaderBar from "src/components/HeaderBar";
import Footer from "src/components/Footer";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { CustomerSchemaUpdate } from "../../schema/customerSchema";
import { useRouter } from "next/router";

const product = () => {
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { profile } = users;
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const [displayHistory, setDisplayHistory] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const token = window.localStorage.getItem("@token");
  const router = useRouter();

  const gender = [
    {
      label: "Male",
      value: "M",
    },
    {
      label: "Female",
      value: "F",
    },
  ];

  const province = [
    {
      label: "Southern",
      value: "southern",
    },
    {
      label: "Central",
      value: "central",
    },
    {
      label: "North western",
      value: "northwest",
    },
    {
      label: "Uva",
      value: "uva",
    },
    {
      label: "Sabaragamuwa",
      value: "sabaragamuwa",
    },
    {
      label: "West",
      value: "west",
    },
    {
      label: "Eastern",
      value: "eastern",
    },
    {
      label: "Northen",
      value: "northen",
    },
    {
      label: "North Central",
      value: "northCentral",
    },
  ];

  const featchOnLoad = async () => {
    const payload = {
      id: auth.user._id,
      token,
    };
    dispatch(getSingleUserStart(payload));
    setUserInfo(profile);
  };

  useEffect(() => {
    featchOnLoad();

  }, []);

  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const onClickHistory = () => {
    setDisplayHistory(true);
    setDisplaySettings(false);
  }

  const onClickSettings = () => {
    setDisplaySettings(true);
    setDisplayHistory(false);
  }

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    const payload = {
      data: userInfo,
      token,
    };
    dispatch(updateUserStart(payload));
    router.reload(window.location.pathname)
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
    const errMsg = validateProperty(name, value, CustomerSchemaUpdate);

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
            <aside
              id="sidebar"
              class="sidebar col-lg-8 col-md-4 col-sm-12 col-xs-12"
            >
              <div class="biolife-mobile-panels">
                <span class="biolife-current-panel-title">Sidebar</span>
                <a
                  class="biolife-close-btn"
                  href="#"
                  data-object="open-mobile-filter"
                >
                  &times;
                </a>
              </div>
              <div class="sidebar-contain">
                <div class="widget biolife-filter">
                  <h4 class="wgt-title" onClick={() => onClickSettings()}>Settings</h4>
                </div>
                <div class="widget biolife-filter">
                  <h4 class="wgt-title" onClick={() => onClickHistory()}>History</h4>
                </div>
              </div>
            </aside>
          </div>

          {!displayHistory && displaySettings &&
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
                        <select
                          className="form-control"
                          name="gender"
                          id="gender"
                          value={userInfo.gender}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              [e.target.id]: e.target.value,
                            })
                          }
                        >
                          <option value="" disabled="disabled">
                            Select your Gender here
                        </option>
                          {gender.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <p className="text-red-500 text-xs italic">
                          {errors && errors["dob"]}
                        </p>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="address">
                          <b>Province : </b>
                        </label>
                        <select
                          className="form-control"
                          name="province"
                          id="province"
                          value={userInfo.province}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              [e.target.id]: e.target.value,
                            })
                          }
                        >
                          <option disabled="disabled" selected="true">
                            Select your province here
                        </option>
                          {province.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
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
                      </button>{" "}
                        &nbsp;
                      <a
                          style={{ padding: "6px", fontSize: "13px" }}
                          data-cy="link-new-report"
                          href="/admin/customers"
                          className="new-report btn btn-danger gap- btn-sm"
                        >
                          {" "}
                          Cancel
                      </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>}

          {!displaySettings && displayHistory &&
            <div className="col-md-8">
              <div className="row">
                <form>
                  <div className="form-row col-md-12">

                    <table className="table w-full">
                      <thead>
                        <tr style={{ backgroundColor: "#ecf0e2" }}>
                          <th><b>Order Id</b></th>
                          <th><b>Order Name</b></th>
                          <th><b>Date</b></th>
                          <th><b>status</b></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                          <td>0001</td>
                          <td>Hendry carlson</td>
                          <td>11-11-2022</td>
                          <td><i>processing</i></td>
                          <th>  <a
                          style={{ padding: "6px", fontSize: "13px" }}
                          data-cy="link-new-report"
                          href="/admin/customers"
                          className="new-report btn btn-danger gap- btn-sm"
                        >
                          {" "}
                          Cancel
                      </a></th>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default product;
