import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getOrderStart } from "../../../store/orders/actions";
import Footer from "../../../components/admin/Footer";

const ReportIndex = () => {
  // set damage report data to usestate
  const [damageReportsData, setDamageReportsData] = useState([]);
  // get damage reports from state
  const dispatch = useDispatch();
  const { orders, auth } = useSelector((state) => state);
  const { allOrders } = orders;
  console.log(allOrders, "test");

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
              <span className="current-page">Reports</span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-3">
            <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
              <ul className="services-list">
                <div className="tab-head tab-head__icon-top-layout icon-top-layout">
                  <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                    <li className="tab-element">
                      <a href="#tab01_2nd" className="tab-link">
                        <span className="biolife-icon icon-car"></span>Orders
                      </a>
                    </li>
                    <li className="tab-element">
                      <a href="/admin/reports/stocks" className="tab-link">
                        <span className="biolife-icon icon-schedule"></span>
                        Stock
                      </a>
                    </li>
                    <li className="tab-element">
                      <a href="/admin/reports/finance" className="tab-link">
                        <span className="biolife-icon icon-suporter"></span>
                        Financial & Sales
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default ReportIndex;
