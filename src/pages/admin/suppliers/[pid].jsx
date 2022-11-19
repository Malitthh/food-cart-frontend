import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { SupplierSchemaUpdate } from "../../../schema/customerSchema";

const updateSupplier = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { allUsers } = users;
  const [userInfo, setUserInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const token = window.localStorage.getItem("@token");
  const Categories = [
    {
      label: "Fruit & Nuts",
      value: "fruit_nuts",
    },
    {
      label: "Vegetables",
      value: "vegetables",
    },
    {
      label: "Berries",
      value: "berries",
    },
    {
      label: "Butter & Eggs",
      value: "butter_eggs",
    },
    {
      label: "Rice",
      value: "rice",
    },
  ];

  const { pid } = router.query;

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
    validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    let user = userInfo;
    user.role = "supplier";
    const payload = {
      data: user,
      token,
    };
    dispatch(updateUserStart(payload));
    router.push("/admin/suppliers")
  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    e.preventDefault();
    console.log(userInfo, "pp");
    onSubmit();

    e.preventDefault();
    const err = validateForm(userInfo, SupplierSchemaUpdate);
    console.log(err, "update")
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
    const errMsg = validateProperty(name, value, SupplierSchemaUpdate);

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
              <a href="/admin/suppliers" className="permal-link">
                Suppliers
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Edit Suppliers</b>
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
                      type="text"
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
                  <div className="form-group col-md-6">
                    <label htmlFor="mobileNo">
                      <b>Contact No : </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.mobileNo}
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Enter your contact no here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["mobileNo"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="joinDate">
                      <b>Date of Join</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.joinDate}
                      id="joinDate"
                      name="joinDate"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["joinDate"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="category">
                      <b>What does he/she supply?</b>
                    </label>
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      value={userInfo.category}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [e.target.id]: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled="disabled">
                        Select your category here
                      </option>
                      {Categories.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["category"]}
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
                      style={{padding:"6px", fontSize:"13px"}}
                      data-cy="link-new-report"
                      href="/admin/suppliers"
                      className="new-report btn btn-danger gap- btn-sm"
                    >
                      {" "}
                      Cancel
                    </a>
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

export default updateSupplier;
