import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStart } from "../../../store/users/actions";
import NavBar from "src/components/admin/NavBar";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { EmployeeSchemaUpdate } from "../../../schema/customerSchema";
import moment from 'moment';

const updateEmployee = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { allUsers } = users;
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const token = window.localStorage.getItem("@token");

  const dateFormat = "YYYY-MM-DD";
  const today = new Date();

  const dateTime = moment(today).format(dateFormat);
  const dobMax = moment(dateTime).subtract(18, 'years').format(dateFormat);
  const dobMin = moment(dateTime).subtract(60, 'years').format(dateFormat);

  const depts = [
    {
      label: "IT",
      value: "IT",
    },
    {
      label: "HR",
      value: "HR",
    },
    {
      label: "SALES",
      value: "SALES",
    },
  ];

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
    validateField(e.target.id, e.target.value);
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    let user = userInfo;
    user.role = "employee";
    const payload = {
      data: user,
      token,
    };
    dispatch(updateUserStart(payload));
    router.push("/admin/employees");
  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    e.preventDefault();
    const err = validateForm(userInfo, EmployeeSchemaUpdate);
    console.log(err, "update")
    if (err) {
      setErrors(err);
    } else {
      onSubmit();
      router.push("/admin/employees");
    }
  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, EmployeeSchemaUpdate);

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
              <a href="/admin/employees" className="permal-link">
                Employees
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Edit Employee</b>
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
                      <b>Name</b>
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
                      <b>Email</b>
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
                    <label htmlFor="Address">
                      <b>Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.address}
                      id="address"
                      name="address"
                      placeholder="Enter your addresss here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["address"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="nic">
                      <b>NIC</b>
                    </label>
                    <input
                      type="number/text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.nic}
                      id="nic"
                      name="nic"
                      placeholder="Enter your NIC here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["nic"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="dob">
                      <b>Date of Birth</b>
                    </label>
                    <input
                      max={dobMax}
                      min={dobMin}
                      type="date"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.dob}
                      id="dob"
                      name="dob"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["dob"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="mobileNo">
                      <b>Contact No</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.mobileNo}
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Enter your mobile no here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["mobileNo"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="gender">
                      <b>Gender</b>
                    </label>
                    <select
                      className="form-control"
                      name="gender" id="gender"
                      value={userInfo.gender}
                      onChange={onChangeInput}
                    >
                      <option value="" disabled="disabled">
                        Select your Gender here
                      </option>
                      {gender.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["gender"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="joinDate">
                      <b>Join Date</b>
                    </label>
                    <input
                      type="date"
                      max={dateTime}
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
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="department">
                      <b>Department</b>
                    </label>
                    <select
                      className="form-control"
                      name="dept"
                      id="dept"
                      value={userInfo.dept}
                      onChange={onChangeInput}
                    >
                      <option value="" disabled="disabled">
                        Select your department here
                      </option>
                      {depts.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["department"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="salary">
                      <b>Salary</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={userInfo.salary}
                      id="salary"
                      name="salary"
                      placeholder="Enter your salary here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["salary"]}
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
                      data-cy="reset-new-report-btn"
                      // onClick={(e) => validateBeforeSave(e)}
                      className="btn btn-warning"
                    >
                      Reset
                    </button>{" "}
                    &nbsp;
                    <a
                      style={{padding:"6px", fontSize:"13px"}}
                      data-cy="link-new-report"
                      href="/admin/employees"
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

export default updateEmployee;
