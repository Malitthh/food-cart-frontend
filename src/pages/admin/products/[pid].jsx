import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiUrl, clientBaseURL } from "config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProductStart } from "../../../store/products/actions";
import NavBar from "src/components/admin/NavBar";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { ProductSchema } from "../../../schema/productSchema";

const updateProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();
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
        setMessage("only images accepted");
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

  /**
   * set vehicle makde and model
   * @param {*} e
   */
  const onChangeCategory = (e) => {
    setProductInfo({ ...productInfo, [e.target.id]: e.target.value });
    console.log(e.target.value, e.target.id);
    //validateField("vMakeModel", e.value);
  };

  /**
   * set customer name, mobile no and vehicle no
   * @param {*} e
   */
  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    validateField(e.target.id, e.target.value);
    setProductInfo({ ...productInfo, [e.target.id]: e.target.value });
  };

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    //  e.preventDefault()
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
    product.photos = imgs;

    dispatch(addProductStart(product));
    toast.success("Successfully Added !");

   // router.push("/admin/products");

  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    e.preventDefault();
    // create damageReport object to validate againts DamageReportSchema
    // const drObject = {
    //   customerName: productInfo.customerName,
    //   vehicleNo: productInfo.vehicleNo,
    //   mobileNo: productInfo.mobileNo,
    //   description: productInfo.description,
    //   vMakeModel: vMakeModels.make,
    // };
    console.log(productInfo, "pp");
    onSubmit();
    // dispatch(addProductsStart(productInfo))
    // const hasErrors = validateForm(drObject, ProductSchema);
    // if (hasErrors) {
    //   setErrors(hasErrors);
    //   e.preventDefault();
    //   setShowForm("");
    // } else {
    //   e.preventDefault();
    //   setShowForm("modal-open");
    // }
  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, ProductSchema);

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
              <span className="current-page"><b>Edit Products</b></span>
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
                    <label htmlFor="productName"><b>Product Name : </b></label>
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
                    <label htmlFor="category"><b>Category : </b></label>
                    <select selected="true"
                      id="category"
                      className="form-control"
                      onChange={onChangeCategory}
                      value={productInfo.category}
                    >
                      <option selected disabled>Choose a Category</option>
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
                    <label htmlFor="stock"><b>Stock in Hand</b></label>
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
                    <label htmlFor="costPrice"><b>Cost Price</b></label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={onChangeInput}
                      value={productInfo.customerName}
                      id="costPrice"
                      name="costPrice"
                      placeholder=""
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["costPrice"]}
                    </p>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="marketPrice"><b>Market Price</b></label>
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
                    <label htmlFor="costPrice"><b>Remarks</b></label>
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
                    <label htmlFor="images"><b>Images</b></label>
                    <input
                      type="file"
                      onChange={handleImageFile}
                      className="form-control"
                      placeholder=""
                      multiple="multiple"
                      name="files[]"
                    />
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["price"]}
                    </p>

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
                  </button> &nbsp;
                  <button
                    data-cy="save-new-report-btn"
                    // onClick={(e) => validateBeforeSave(e)}
                    className="btn btn-warning"
                  >
                    Reset
                  </button> &nbsp;
                  <a 
                    data-cy="link-new-report"
                    href="/admin/products"
                    className="new-report btn btn-danger gap- btn-sm"
                  > Cancel
                   
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
