import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getProductStart } from "../../../store/products/actions";
import Footer from "../../../components/admin/Footer"

const Home = () => {
  // set damage report data to usestate
  const [damageReportsData, setDamageReportsData] = useState([]);
  // get damage reports from state
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;
console.log(allProducts, "test")
  const featchOnLoad = async () => {
    dispatch(getProductStart());
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
                    <span className="number">1</span>
                    <span className="biolife-icon icon-beer"></span>
                    <a className="srv-name" href="#">
                     Number of Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">2</span>
                    <span className="biolife-icon icon-schedule"></span>
                    <a className="srv-name" href="#">
                    Number of Pending Orders
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="number">3</span>
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="#">
                      Number of Completed Orders
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
