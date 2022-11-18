import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getOrderStart } from "../../../store/orders/actions";
import { getProductStart } from "../../../store/products/actions";
import Footer from "../../../components/admin/Footer";
import { apiUrl, clientBaseURLImages } from "config";
const Orders = () => {

  // get damage reports from state
  const dispatch = useDispatch();
  const { orders, products } = useSelector((state) => state);
  const { allOrders } = orders;
  const { allProducts } = products;

  const pendingOrders = allOrders.filter((order) => order.status === "pending");
  const processingOrders = allOrders.filter(
    (order) => order.status === "processing"
  );
  const shippedOrders = allOrders.filter((order) => order.status === "shipped");
  const deliveredOrders = allOrders.filter(
    (order) => order.status === "delivered"
  );

  const featchOnLoad = async () => {
    dispatch(getOrderStart());
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
              <span className="current-page">Dashboard</span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <div class="container bootdey">
                <div class="row invoice row-printable">
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
                              STOCK REPORT
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
                            <div className="row pb-3 p-1">
                              <div className="col-md-6 text-left">
                                <div class="invoice-details mt25">
                                 
                                </div>
                              </div>
                            </div>
                            <div class="invoice-items">
                              <div class="table-responsive">
                                <table class="table table-bordered">
                                  <thead>
                                    <tr style={{ backgroundColor: "#ecf0e2" }}>
                                      <th class="per70 text-center">
                                        <b>Image</b>
                                      </th>
                                      <th class="per70 text-center">
                                        <b>Name</b>
                                      </th>
                                      <th class="per25 text-center">
                                        <b>Previous Available Qty</b>
                                      </th>
                                      <th class="per25 text-center">
                                        <b>Sold Qty</b>
                                      </th>
                                      <th class="per25 text-center">
                                        <b>Current Stock In Hand</b>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {allProducts &&
                                      allProducts.map((product, key) => (
                                        <tr
                                          key={key}
                                          className={
                                            key % 2 === 1 ? "active" : ""
                                          }
                                        >
                                          <td>
                                            <img
                                              style={{ height: "20px" }}
                                              src={`${clientBaseURLImages}${product.photos[0]?.url}`}
                                            />
                                          </td>
                                          <td>{product.productName}</td>
                                          <td class="text-right">
                                            {product.sold+product.stock}
                                          </td>
                                          <td class="text-right">
                                            {product.sold}
                                          </td>
                                          <td class="text-right">
                                            {product.stock}
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th colspan="4" class="text-right"></th>
                                      <th class="text-right"> -</th>
                                    </tr>
                                  </tfoot>
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
