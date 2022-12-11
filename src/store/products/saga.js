import { call, put, takeEvery } from "redux-saga/effects";
import ProductsService from "./service";
import { toast } from "react-toastify";
import {
  PRODUCTS_TYPES,
  addProductsSuccess,
  addProductsError,
  getProductSuccess,
  getProductError,
  updateProductSuccess,
  updateProductError,
  getSingleProductError,
  getSingleProductSuccess,
  deleteProductSuccess,
  deleteProductError,
} from "./actions";

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}
 */
function* addProductStart({ type, payload }) {
  try {
    console.log("saga", payload);
    const response = yield ProductsService.addProduct(payload);
    yield put(addProductsSuccess(response.data));
    toast.success("Successfully Added !");
  } catch (err) {
    yield put(addProductsError(err));
    toast.error(err.response.data.message);
    console.log(err, "err");
  }
}

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}
 */
function* getProductStart({ type, payload }) {
  try {
    console.log(payload, "id")
    const response = yield ProductsService.getProducts(payload);
    yield put(getProductSuccess(response.data.data.products));
    console.log(response.data.data.products, "saga");
  } catch (err) {
    yield put(getProductError(err));
    toast.error(err.response.data.message);
    console.log(err, "err");
  }
}

/**
 * Add a single product start saga funtion to invoke the API call
 * @param {*}
 */
function* getSingleProductStart({ type, payload }) {
  try {
    const response = yield ProductsService.getSingleProduct(payload);
    yield put(getSingleProductSuccess(response.data.product));
    console.log(response.data.product, "saga");
  } catch (err) {
    yield put(getSingleProductError(err));
    toast.error(err.response.data.message);
    console.log(err, "err");
  }
}

/**
 * Update product saga funtion to invoke the API call
 * @param {*}
 */
function* updateProductStart({ type, payload }) {
  console.log(payload, "UPDATE YEKA");
  try {
    const response = yield ProductsService.updateProduct(payload);
    yield put(updateProductSuccess(response.data.data.products));
    console.log(response.data.data.products, "saga");
    toast.success("Successfully Updated !");
  } catch (err) {
    yield put(updateProductError(err));
    toast.error(err.response.data.message);
    console.log(err, "err");
  }
}

/**
 * delete product saga funtion to invoke the API call
 * @param {*}
 */
function* deleteProductStart({ type, payload }) {
  console.log(payload, "delete");
  try {
    const response = yield ProductsService.deleteProduct(payload);
    // yield put(deleteProductSuccess(response.data.products))
    // console.log(response.data.data.products,"saga")
    toast.success("Successfully Deleted !");
  } catch (err) {
    yield put(deleteProductError(err));
    toast.error(err.response.data.message);
    console.log(err, "err");
  }
}

/**
 * Main Saga for Damage Reports
 */
function* productsSaga() {
  yield* [
    takeEvery(PRODUCTS_TYPES.ADD_PRODUCT_START, addProductStart),
    takeEvery(PRODUCTS_TYPES.GET_PRODUCT_START, getProductStart),
    takeEvery(PRODUCTS_TYPES.DELETE_PRODUCT_START, deleteProductStart),
    takeEvery(PRODUCTS_TYPES.GET_SINGLE_PRODUCT_START, getSingleProductStart),
    takeEvery(PRODUCTS_TYPES.UPDATE_PRODUCT_START, updateProductStart),
  ];
}

export default productsSaga;
