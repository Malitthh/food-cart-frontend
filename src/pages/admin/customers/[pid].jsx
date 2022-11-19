import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { CustomerSchemaUpdate } from "../../../schema/customerSchema";

const updateCustomer = () => {
  const token = window.localStorage.getItem("@token");
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { allUsers } = users;
  const [userInfo, setUserInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();

  const { pid } = router.query;
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
  useEffect(() => {
    if (!pid) {
      return;
    }

    const featchOnLoad = async () => {
      const result = allUsers.filter((user) => user._id === pid);
      setUserInfo(result[0]);
      console.log(result[0], "all");
    };
    featchOnLoad();
  }, [pid]);

  /**
   * set customer name, mobile no and vehicle no
   * @param {*} e
   */
  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    const payload = {
      data: userInfo,
      token,
    };
    dispatch(updateUserStart(payload));
    router.push("/admin/customers");
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
              <a href="/admin/customers" className="permal-link">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Edit Customer</b>
              </span>
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
                      <label htmlFor="province">
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
                      <label htmlFor="address">
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

                  {/* <div className="form-row">
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
                  </div> */}
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
                        // onClick={(e) => validateBeforeSave(e)}
                        className="btn btn-warning"
                      >
                        Reset
                      </button>{" "}
                      &nbsp;
                      <a
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default updateCustomer;
