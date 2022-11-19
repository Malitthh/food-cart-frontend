import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getOrderStart } from "../../../store/orders/actions";
import { apiUrl, clientBaseURLImages } from "config";

const OrderIndex = () => {
  const dispatch = useDispatch();
  const { orders, auth } = useSelector((state) => state);
  const { allOrders } = orders;
  const token =  window.localStorage.getItem('@token');
  const featchOnLoad = async () => {
    dispatch(getOrderStart());
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
              <span className="current-page"><b>Orders</b></span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr style={{backgroundColor:"#ecf0e2"}}>
                    <th><b>Customer Name</b></th>
                    <th><b>Email</b></th>
                    <th><b>Status</b></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders &&
                    allOrders.map((item, key) => (
                      <tr key={key} className={key % 2 === 1 ? "active" : ""}>
                        <td>{item.customerName}</td>
                        <td>{item.customerEmail}</td>
                        <td><b>{item.status}</b></td>
                        <td>
                          <a
                            data-cy={`view-report-btn${key}`}
                            href={`orders/${item._id}`}
                            className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                          >
                            <i className="leading-tight fa fa-eye text-xs"></i>
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

export default OrderIndex;
