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
  const { users, products, orders, auth } = useSelector((state) => state);
  const { user, status } = auth;
  const { allUsers } = users;
  const { allProducts } = products;
  const { allOrders } = orders;

  const customers = allUsers.filter((user) => user.role === "customer");
  const employees = allUsers.filter((user) => user.role === "employee");
  const suppliers = allUsers.filter((user) => user.role === "supplier");

 const lowStockProducts = allProducts.filter(
    (product) => product.stock <= product.lowStock
  );

  const featchOnLoad = async () => {
    let role = "all";
    let supplier;
    if (user?.role === "supplier") {
      supplier = user?._id;
    } 
    dispatch(getUserStart(role));
    dispatch(getProductStart(supplier));
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
              <a href="/supplier" className="permal-link">
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
              <ul className="services-list" style={{border:"none"}}>
                <li>
                  <div className="service-inner color-reverse">
                    <span className="biolife-icon icon-fruits"></span>
                    <a className="srv-name" href="supplier/products">
                      Number of All Products
                    </a>
                    <span className="number" style={{marginLeft: "60px", marginTop: "12px", backgroundColor:"#ed9f00"}} >{allProducts.length}</span>
                  </div>
                </li>

                <li>
                  <div className="service-inner color-reverse">
                    <span className="biolife-icon icon-car"></span>
                    <a className="srv-name" href="/supplier/products/low-stocks">
                      Low Stock Products
                    </a>
                    <span className="number" style={{marginLeft: "55px", marginTop: "12px",  backgroundColor:"#ed9f00"}} >{lowStockProducts.length}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main> 
      <br />
    
    </div>
  );
};

export default Home;
