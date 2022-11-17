import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";

const updateSupplier = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { allUsers } = users;
  const [userInfo, setUserInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();

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
    console.log(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    dispatch(updateUserStart(userInfo));
    toast.success("Successfully Updated !");
    router.push("/admin/suppliers");
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
            <a href="/admin/suppliers" className="permal-link">
              Suppliers
            </a>
          </li>
          <li className="nav-item">
            <span className="current-page"><b>Edit Suppliers</b></span>
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
                  <label htmlFor="name"><b>Name : </b></label>
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
                  <label htmlFor="email"><b>Email : </b></label>
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
                  <label htmlFor="address"><b>Address : </b></label>
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
                  <label htmlFor="mobileNo"><b>Contact No : </b></label>
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
                  <label htmlFor="joinDate">
                    <b>What does he/she supply?</b>
                  </label>
                  <select className="form-control">
                    <option value="" disabled="disabled" selected="true">Select a category here</option>
                    <option value="Fruits&nuts">Fruits & nuts</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Berries">Berries</option>
                    <option value="Butter&Eggs">Butter & Eggs</option>
                  </select>
                  <p className="text-red-500 text-xs italic">
                    {errors && errors["joinDate"]}
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
                    placeholder="Enter your password here"
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
                </button> &nbsp;
                <button
                  data-cy="save-new-report-btn"
                  onClick={(e) => validateBeforeSave(e)}
                  className="btn btn-warning"
                >
                  Reset
                </button> &nbsp;
                <a 
                  data-cy="link-new-report"
                  href="/admin/suppliers"
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
  </div>
  );
};

export default updateSupplier;
