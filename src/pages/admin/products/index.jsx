import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { getProductStart, deleteProductStart } from "../../../store/products/actions";
import { apiUrl, clientBaseURLImages } from "config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProductIndex = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { products, auth } = useSelector((state) => state);
  const { allProducts } = products;
  const token =  window.localStorage.getItem('@token');
  const featchOnLoad = async () => {
    dispatch(getProductStart());
  };

  useEffect(() => {
    featchOnLoad();
  }, []);

  const deleteProduct = async (id) => {
    const payload = {
      id,
      token
    }
    dispatch(deleteProductStart(payload));
   router.reload(window.location.pathname)
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
              <span className="current-page"><b>Products</b></span>
            </li>
          </ul>
          <div style={{ float: "right", backgroundColor:"black", color:"white", borderRadius:"5px"}}>
            <a 
              data-cy="link-new-report"
              href="/admin/products/new-product"
              className="btn gap-2 btn-sm .hover-item"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              &nbsp;&nbsp;New Product
            </a>
          </div>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div style={{height:"500PX", overflowY:"scroll"}}>
              <table className="table w-full">
                <thead>
                  <tr style={{backgroundColor:"#ecf0e2",overflow: "auto"}}>
                    <th></th>
                    <th><b>Product Name</b></th>
                    <th><b>Category</b></th>
                    <th><b>Cost Price</b></th>
                    <th><b>Market Price</b></th>
                    <th><b>Stock In hand</b></th>
                    <th><b>Sold</b></th>
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
                        <td>{product.sold}</td>
                        <td>
                          <a
                            data-cy={`view-report-btn${key}`}
                            href={`products/${product._id}`}
                            className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                          >
                            <i className="leading-tight fa fa-pencil text-xs"></i>
                          </a> &nbsp;&nbsp;

                          <a
                            data-cy={`delete-report-btn${key}`}
                            onClick={() => deleteProduct(product._id)}
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

export default ProductIndex;
