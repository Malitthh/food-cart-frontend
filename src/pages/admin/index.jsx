import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import PreviousReports from "src/components/admin/PreviousReports";
import Footer from "../../components/admin/Footer";
import { getUserStart } from "../../store/users/actions";
import { getProductStart } from "../../store/products/actions";
import { getOrderStart } from "../../store/orders/actions";

const Home = () => {
  const token = window.localStorage.getItem("@token");
  const dispatch = useDispatch();
  const { users, products, orders } = useSelector((state) => state);
  const { allUsers } = users;
  const { allProducts } = products;
  const { allOrders } = orders;

  const customers = allUsers.filter((user) => user.role === "customer");
  const employees = allUsers.filter((user) => user.role === "employee");
  const suppliers = allUsers.filter((user) => user.role === "supplier");

  const featchOnLoad = async () => {
    let role = "all";
    dispatch(getUserStart(role));
    dispatch(getProductStart());
    dispatch(getOrderStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  const styles =`    
  margin-top: -6px;
  padding-top: 7px;
  margin-bottom: 15px;
  margin-left: 20px;`

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
              <span className="current-page"><b>Dashboard</b></span>
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
                    <span className="biolife-icon icon-suporter"></span>
                    <a className="srv-name" href="admin/suppliers" styles={styles}>
                      Number of Suppliers
                      <span className="number" style={{marginLeft: "6px", marginTop: "-7px"}} >{suppliers.length}</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    
                    <span className="biolife-icon icon-suporter"></span>
                    <a className="srv-name" href="admin/employees">
                      Number of Employees
                      <span className="number" style={{marginLeft: "6px", marginTop: "-7px"}}>{employees.length}</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-inner color-reverse">
                    
                    <span className="biolife-icon icon-suporter"></span>
                    <a className="srv-name" href="admin/customers">
                      Number of customers
                      <span className="number" style={{marginLeft: "6px", marginTop: "-7px"}}>{customers.length}</span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="services-list">
                <li>
                  <div className="service-inner color-reverse">
                    <span className="biolife-icon icon-fruits"></span>
                    <a className="srv-name" href="admin/products">
                      Number of Products
                      <span className="number"  style={{marginLeft: "6px", marginTop: "-7px"}}>{allProducts.length}</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="service-inner color-reverse">
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="/admin/orders">
                      Number of Orders
                      <span className="number" style={{marginLeft: "6px", marginTop: "-7px"}}>{allOrders.length}</span>
                    </a>
                  </div>
                </li>
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

export default Home;
