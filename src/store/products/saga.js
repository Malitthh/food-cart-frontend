import { call, put, takeEvery } from 'redux-saga/effects'
import ProductsService from './service'
import {
    PRODUCTS_TYPES,
    addProductsSuccess,
    addProductsError,
    getProductSuccess,
    getProductError,
    updateProductSuccess,
    updateProductError,
    deleteProductSuccess,
    deleteProductError
} from './actions'

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
function* addProductStart({type, payload}) {
    try {
        console.log("saga", payload)
        const response = yield ProductsService.addProduct(payload)
        yield put(addProductsSuccess(response.data))
     
    } catch (err) {
        yield put(addProductsError(err))
        console.log(err, "err")
    }
}

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
 function* getProductStart({type, payload}) {
    try {
        const response = yield ProductsService.getProducts()
        yield put(getProductSuccess(response.data.data.products))
        console.log(response.data.data.products,"saga")
    } catch (err) {
        yield put(getProductError(err))
        console.log(err, "err")
    }
}

/**
 * Main Saga for Damage Reports
 */
function* productsSaga() {
    yield* [
        takeEvery(PRODUCTS_TYPES.ADD_PRODUCT_START, addProductStart),
        takeEvery(PRODUCTS_TYPES.GET_PRODUCT_START, getProductStart)
    ]
}

export default productsSaga