import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getOrderStart } from "../../../store/orders/actions";
import Footer from "../../../components/admin/Footer"

const Home = () => {
  // set damage report data to usestate
  const [damageReportsData, setDamageReportsData] = useState([]);
  // get damage reports from state
  const dispatch = useDispatch();
  const { orders, auth } = useSelector((state) => state);
  const { allOrders } = orders;
console.log(allOrders, "test")

 const pendingOrders = allOrders.filter(order => order.status === 'pending');
 const processingOrders = allOrders.filter(order => order.status === 'processing');
 const shippedOrders = allOrders.filter(order => order.status === 'shipped');
 const deliveredOrders = allOrders.filter(order => order.status === 'delivered');

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
              <span className="current-page">Dashboard</span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
              <ul className="services-list">
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">{allOrders.length}</span>
                    <span className="biolife-icon icon-beer"></span>
                    <a className="srv-name" href="#">
                     Number of Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">{pendingOrders.length}</span>
                    <span className="biolife-icon icon-schedule"></span>
                    <a className="srv-name" href="#">
                    Number of Pending Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">{processingOrders.length}</span>
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="#">
                      Number of Processing Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">{shippedOrders.length}</span>
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="#">
                      Number of Shipped Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">{deliveredOrders.length}</span>
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="#">
                      Number of Delivered Orders
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main><br/>
      <Footer/>
    </div>
  );
};

export default Home;
