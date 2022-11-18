import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiUrl, clientBaseURL } from "config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductStart,
  getSingleProductStart,
} from "../../../store/products/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { ProductSchemaUpdate } from "../../../schema/productSchema";

const updateProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();
  const { products, auth } = useSelector((state) => state);
  const { singleProduct, allProducts } = products;
  const token = window.localStorage.getItem("@token");
  const { pid } = router.query;

  useEffect(() => {
    if (!pid) {
      return;
    }

    const featchOnLoad = async () => {
      const result = allProducts.filter((product) => product._id === pid);
      console.log(result[0], "all");
      setProductInfo(result[0]);
    };
    featchOnLoad();
  }, [pid]);
  /**
   * set image
   * @param {*} e
   * @returns
   */
  const handleImageFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        toast.error("only images accepted");
      }
    }
  };

  /**
   * Remove added image before upload
   * @param {*} i
   */
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  const removeDBImage = (i) => {
    console.log(i, "rm");
    const imgs = productInfo.photos.filter((x) => x.uuid !== i);
    setProductInfo({ ...productInfo, photos: imgs });
  };
  /**
   * set vehicle makde and model
   * @param {*} e
   */
  const onChangeCategory = (e) => {
    setProductInfo({ ...productInfo, [e.target.id]: e.target.value });
    console.log(e.target.value, e.target.id);
  };

  /**
   * set customer name, mobile no and vehicle no
   * @param {*} e
   */
  const onChangeInput = (e) => {
    validateField(e.target.id, e.target.value);
    setProductInfo({ ...productInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async (product) => {
    //  e.preventDefault()
    const payload = {
      data: product,
      token,
    };
    dispatch(updateProductStart(payload));
    router.push("/admin/products");
  };

  /**
   * Validate Form
   * @param {*} e
   */

  // const validateBeforeSave = (e) => {
  //   e.preventDefault();

  //   console.log(productInfo, "pp");
  //   const hasErrors = validateForm(productInfo, ProductSchemaUpdate);
  //   console.log(hasErrors, "pp");
  //   if (hasErrors) {
  //     setErrors(hasErrors);
  //   } else {
  //     e.preventDefault();
  //     onSubmit();
  //   }
  // };

  const validateBeforeSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const imgs = [];
    const imgUploadUrl = `${clientBaseURL}/upload`;

    for (var i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
      formData.append("destination", "images");
      formData.append("create_thumbnail", true);

      const image = await axios.post(imgUploadUrl, formData, config);
      imgs.push(image.data);
    }

    let product = productInfo;

    if (imgs.length !== 0) product.photos = imgs;

    const err = validateForm(product, ProductSchemaUpdate);

    if (err) {
      setErrors(err);
    } else {
      onSubmit(product);
    }
  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, ProductSchemaUpdate);

    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
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
              <a href="/admin/products" className="permal-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Edit Products</b>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="productName">
                      <b>Product Name : </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="productName"
                      onChange={onChangeInput}
                      value={productInfo.productName}
                      placeholder="Enter product name here"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["productName"]}
                    </p>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="category">
                      <b>Category : </b>
                    </label>
                    <select
                      selected="true"
                      id="category"
                      className="form-control"
                      onChange={onChangeCategory}
                      value={productInfo.category}
                    >
                      <option selected disabled>
                        Choose a Category
                      </option>
                      <option value="fruit_nuts">Fruit & Nuts</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="berries">Berries</option>
                      <option value="butter_eggs">Butter & Rggs</option>
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["category"]}
                    </p>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="stock">
                      <b>Stock in Hand</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      onChange={onChangeInput}
                      value={productInfo.stock}
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["stock"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="costPrice">
                      <b>Cost Price</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={onChangeInput}
                      value={productInfo.costPrice}
                      id="costPrice"
                      name="costPrice"
                      placeholder=""
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["costPrice"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="marketPrice">
                      <b>Market Price</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder=""
                      onChange={onChangeInput}
                      value={productInfo.price}
                      id="price"
                      name="price"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["price"]}
                    </p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="costPrice">
                      <b>Remarks</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={productInfo.description}
                      id="description"
                      name="description"
                      placeholder=""
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["description"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="images">
                      <b>Images - replace current image</b>
                    </label>
                    <input
                      type="file"
                      onChange={handleImageFile}
                      className="form-control"
                      placeholder=""
                      // multiple="multiple"
                      name="files"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["photo"]}
                    </p>

                    {productInfo.photos &&
                      productInfo.photos.map((file, key) => {
                        return (
                          <div key={key} className="overflow-hidden relative">
                            {/* <i
                              onClick={() => {
                                removeDBImage(file.uuid);
                              }}
                              className="fa fa-close absolute right-1 hover:text-white cursor-pointer"
                            ></i> */}
                            <img style={{ height: "100px" }} src={file.url} />
                          </div>
                        );
                      })}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {files.map((file, key) => {
                        return (
                          <div key={key} className="overflow-hidden relative">
                            <i
                              onClick={() => {
                                removeImage(file.name);
                              }}
                              className="fa fa-close absolute right-1 hover:text-white cursor-pointer"
                            ></i>
                            <img
                              style={{ height: "100px" }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <button
                      data-cy="save-new-report-btn"
                      onClick={(e) => validateBeforeSave(e)}
                      className="btn btn-success"
                    >
                      Save
                    </button>{" "}
                    &nbsp;
                    <button
                      data-cy="save-new-report-btn"
                      // onClick={(e) => validateBeforeSave(e)}
                      className="btn btn-warning"
                    >
                      Reset
                    </button>{" "}
                    &nbsp;
                    <a
                      data-cy="link-new-report"
                      href="/admin/products"
                      className="new-report btn btn-danger gap- btn-sm"
                    >
                      {" "}
                      Cancel
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default updateProduct;
