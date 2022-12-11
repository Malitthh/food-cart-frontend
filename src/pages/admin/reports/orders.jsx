import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getOrderStart } from "../../../store/orders/actions";
import { getProductStart } from "../../../store/products/actions";
import Footer from "../../../components/admin/Footer";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Orders = () => {
  // get damage reports from state
  const dispatch = useDispatch();
  const { orders, products } = useSelector((state) => state);
  const { allOrders } = orders;
  const { allProducts } = products;
  const [filteredOrders, setFilderedOrders] = useState(allOrders);

  const pendingOrders = allOrders.filter((order) => order.status === "pending");
  const processingOrders = allOrders.filter(
    (order) => order.status === "processing"
  );
  const shippedOrders = allOrders.filter((order) => order.status === "shipped");
  const deliveredOrders = allOrders.filter(
    (order) => order.status === "delivered"
  );

  const featchOnLoad = async () => {
    dispatch(getOrderStart("ALL"));
    dispatch(getProductStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  const sum =
    allProducts &&
    allProducts.reduce(function (sum, item) {
      return sum + (item.price * item.sold - item.costPrice * item.sold);
    }, 0);

  const totalSales =
    allProducts &&
    allProducts.reduce(function (sum, item) {
      return sum + item.price * item.sold;
    }, 0);

  const totalCosts =
    allProducts &&
    allProducts.reduce(function (sum, item) {
      return sum + item.costPrice * item.sold;
    }, 0);

  const options = {
    // unit: 'in',
    // format: [4,2]
  };

  const onChangeCategory = (e) => {
    let orders;
    if(e.target.value === "ALL") {
      orders = allOrders;
    } else {
      orders = allOrders.filter((order) => order.status === e.target.value);
    }
    setFilderedOrders(orders)
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
              <a href="/admin/reports" className="permal-link">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Orders Report</b>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <div class="container bootdey">
                <Pdf
                  targetRef={ref}
                  filename="order summary-report.pdf"
                  options={options}
                  x={0.5}
                  y={0.5}
                  scale={0.8}
                >
                  {({ toPdf }) => (
                    <button
                      onClick={toPdf}
                      className="btn btn-success"
                      style={{
                        float: "right",
                        marginRight: "17%",
                        marginTop: "-3%",
                        marginBottom: "0.5%",
                      }}
                    >
                      Generate Pdf
                    </button>
                  )}
                </Pdf>
                <a
                  data-cy="link-new-report"
                  href="/admin/reports"
                  style={{
                    float: "right",
                    marginRight: "0.5%",
                    marginTop: "-3%",
                    marginBottom: "0.5%",
                    padding: "0.58%",
                  }}
                  className="new-report btn btn-warning gap-2 btn-sm"
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  &nbsp;&nbsp;BACK
                </a>
                <div class="row invoice row-printable" ref={ref}>
                  <div class="col-md-10">
                    <div class="panel panel-default plain" id="dash_0">
                      <div class="panel-body p30">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="invoice-logo">
                              <img
                                width="150"
                                src="/assets/images/Logo.jpg"
                                alt="Invoice logo"
                              />
                            </div>
                            <br />
                            <div
                              style={{ paddingLeft: "15px", color: "#b19a1a" }}
                            >
                              Orders Summary Report
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="status">
                                <b>Order Status</b>
                              </label>
                              <select
                                className="form-control"
                                name="status"
                                id="status"
                                onChange={onChangeCategory}
                              >
                                <option value="ALL" selected="true">
                                  ALL
                                </option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancel">Cancelled</option>
                              </select>
                            </div>
                          </div>
                          <br /> <br />
                          <div class="col-lg-6">
                            <div class="invoice-from">
                              <ul class="list-unstyled text-right">
                                <li>
                                  <i>
                                    <b>Food Cart (Pvt) Ltd.</b>
                                  </i>
                                </li>
                                <li>No 68/13A 3rd Cross street, 11</li>
                                <li>Kandy</li>
                                <li>Sri Lanka</li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div className="row pb-3 p-1"></div>
                            <div class="invoice-items">
                              <div class="table-responsive">
                                <table class="table table-bordered">
                                  <thead>
                                    <tr style={{ backgroundColor: "#ecf0e2" }}>
                                      <th class="per70 text-center">
                                        <b>Pending</b>
                                      </th>
                                      <th class="per70 text-center">
                                        <b>Processing</b>
                                      </th>
                                      <th class="per5 text-center">
                                        <b>Shipped</b>
                                      </th>
                                      <th class="per5 text-center">
                                        <b>Delivered</b>
                                      </th>
                                      <th class="per25 text-center">
                                        <b>Total Orders</b>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="text-right">
                                        {pendingOrders.length}
                                      </td>
                                      <td class="text-right">
                                        {processingOrders.length}
                                      </td>
                                      <td class="text-right">
                                        {shippedOrders.length}
                                      </td>
                                      <td class="text-right">
                                        {deliveredOrders.length}
                                      </td>
                                      <td class="text-right">
                                        {allOrders.length}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="table w-full">
                                  <thead>
                                    <tr style={{ backgroundColor: "#ecf0e2" }}>
                                      <th>
                                        <b>Customer Name</b>
                                      </th>
                                      <th>
                                        <b>Email</b>
                                      </th>
                                      <th>
                                        <b>Status</b>
                                      </th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {filteredOrders &&
                                      filteredOrders.map((item, key) => (
                                        <tr
                                          key={key}
                                          className={
                                            key % 2 === 1 ? "active" : ""
                                          }
                                        >
                                          <td>{item.customerName}</td>
                                          <td>{item.customerEmail}</td>
                                          <td>
                                            <b>{item.status}</b>
                                          </td>
                                          <td>
                                            <a
                                              data-cy={`view-report-btn${key}`}
                                              href={`../orders/${item._id}`}
                                              target="_blank"
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
                              <p style={{ float: "right", fontSize: "12px" }}>
                                All amounts are in Sri lankan rupees (LKR)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default Orders;
