import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getProductStart } from "../../../store/products/actions";
import { apiUrl, clientBaseURLImages } from "config";

const ProductIndex = () => {
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;

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
              <span className="current-page">Products</span>
            </li>
          </ul>
          <div style={{ float: "right" }}>
            <a
              data-cy="link-new-report"
              href="/admin/products/new-product"
              className="new-report btn btn-primary gap-2 btn-sm"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              New Product
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
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Cost Price</th>
                    <th>Market Price</th>
                    <th>Stock In hand</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts &&
                    allProducts.map((product, key) => (
                      <tr key={key} className={key % 2 === 1 ? "active" : ""}>
                        <td>
                          <img
                            style={{height: "80px"}}
                            src={`${clientBaseURLImages}${product.photos[0]?.url}`}
                          />
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.category}</td>
                        <td>{product.costPrice}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                          <a
                            data-cy={`view-report-btn${key}`}
                            href={`reports/${product._id}`}
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

export default ProductIndex;
