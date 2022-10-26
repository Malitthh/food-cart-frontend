import { call, put, takeEvery } from 'redux-saga/effects'
import OrderService from './service'
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
     
    } catch (err) {
        yield put(addOrderError(err))
        console.log(err, "err")
    }
}

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
 function* getOrderStart({type, payload}) {
    try {
        const response = yield OrderService.getOrders()
        yield put(getOrderSuccess(response.data.data.orders))
        console.log(response.data.data.orders,"saga")
    } catch (err) {
        yield put(getOrderError(err))
        console.log(err, "err")
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
        console.log(err, "err")
    }
}

/**
 * Main Saga for Orders
 */
function* OrderSaga() {
    yield* [
        takeEvery(ORDER_TYPES.ADD_ORDER_START, addOrderStart),
        takeEvery(ORDER_TYPES.GET_ORDER_START, getOrderStart),
        takeEvery(ORDER_TYPES.GET_ONE_ORDER_START, getOneOrderStart)
    ]
}

export default OrderSaga