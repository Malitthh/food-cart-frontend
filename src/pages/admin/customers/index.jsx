import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getUserStart, deleteUserStart } from "../../../store/users/actions";
import { apiUrl, clientBaseURLImages } from "config";
import queryString from "query-string";
import { toast } from "react-toastify";

const CustomerIndex = () => {
  const dispatch = useDispatch();
  const { users, auth } = useSelector((state) => state);
  const { allUsers } = users;

  console.log(allUsers, "uu");

  const featchOnLoad = async () => {
    let role = "customer";
    dispatch(getUserStart(role));
  };

  const deleteUser = async (id) => {
    dispatch(deleteUserStart(id));
    toast.success("Successfully Deleted !");
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

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
              New Customer
            </a>
          </div>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers &&
                    allUsers.map((user, key) => (
                      <tr key={key} className={key % 2 === 1 ? "active" : ""}>
                        <td>{key + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <a
                            data-cy={`view-report-btn${key}`}
                            href={`customers/${user._id}`}
                            className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                          >
                            <i className="leading-tight fa fa-eye text-xs"></i>
                          </a>

                          <a
                            data-cy={`delete-report-btn${key}`}
                            onClick={() => deleteUser(user._id)}
                            className="inline-block px-6 py-3 mb-0 mr-2 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                          >
                            <i className="leading-tight fa fa-trash-o text-xs"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerIndex;
