import { all } from 'redux-saga/effects'
import productsSaga from './products/saga'
import vehicleSaga from './vehicles/saga'
import authSaga from './auth/saga'
import OrderSaga from './orders/saga'
import UsersSaga from './users/saga'
/**
 * Initiating the root saga
 */
export default function* rootSaga() {
    yield all([
        productsSaga(),
        vehicleSaga(),
        authSaga(),
        OrderSaga(),
        UsersSaga()
    ])
}