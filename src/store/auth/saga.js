import { call, put, takeEvery } from 'redux-saga/effects'
import AuthService from './service'
import {
    AUTH_TYPES,
    loginSuccess,
    loginError
} from './actions'

/**
 * Add user start saga funtion to invoke the API call
 * @param {*}  
 */
function* loginStart({type, payload}) {
    try {
        console.log("saga", )
        const response = yield AuthService.login(payload)

        yield put(loginSuccess(response.data))
        localStorage.setItem('@token', response.data.token)
        localStorage.setItem('@user', response.data.user)
        console.log(response,"saga", payload)
    } catch (err) {
        yield put(loginError(err))
        console.log(err, "err")
    }
}

/**
 * Main Saga for auth
 */
function* authSaga() {
    yield takeEvery(AUTH_TYPES.LOGIN_START, loginStart)
}

export default authSaga