import { call, put, takeEvery } from 'redux-saga/effects'
import OrderService from './service'
import { toast } from "react-toastify";
import {
    ORDER_TYPES,
    addOrderSuccess,
    addOrderError,
    getOrderSuccess,
    getOrderError,
    getOneOrderSuccess,
    getOneOrderError,
    updateOrderSuccess,
    updateOrderError,
    deleteOrderSuccess,
    deleteOrderError
} from './actions'

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
function* addOrderStart({type, payload}) {
    try {
        console.log("saga", payload)
        const response = yield OrderService.addOrder(payload)
        yield put(addOrderSuccess(response.data))
        toast.success("Successfully Added !");
    } catch (err) {
        yield put(addOrderError(err))
        toast.error(err.response.data.message);
    }
}

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
 function* getOrderStart({type, payload}) {
    try {
        const response = yield OrderService.getOrders(payload)
        yield put(getOrderSuccess(response.data.data.orders))
        console.log(response.data.data.orders,"saga")
    } catch (err) {
        yield put(getOrderError(err))
        toast.error(err.response.data.message);
    }
}

function* getOneOrderStart({type, payload}) {
    console.log(payload, "Saga")
    try {
        const response = yield OrderService.getOneOrder(payload)
        yield put(getOneOrderSuccess(response.data.order))
        console.log(response,"saga")
    } catch (err) {
        yield put(getOneOrderError(err))
        toast.error(err.response.data.message);
    }
}

function* updateOrderStart({type, payload}) {
    console.log(payload, "Saga")
    try {
        const response = yield OrderService.updateOrder(payload)
        yield put(updateOrderSuccess(response.data.order))
        toast.success("Successfully Updated !");
    } catch (err) {
        yield put(updateOrderError(err))
        toast.error(err.response.data.message);
    }
}

/**
 * Main Saga for Orders
 */
function* OrderSaga() {
    yield* [
        takeEvery(ORDER_TYPES.ADD_ORDER_START, addOrderStart),
        takeEvery(ORDER_TYPES.GET_ORDER_START, getOrderStart),
        takeEvery(ORDER_TYPES.GET_ONE_ORDER_START, getOneOrderStart),
        takeEvery(ORDER_TYPES.UPDATE_ORDER_START, updateOrderStart)
    ]
}

export default OrderSaga