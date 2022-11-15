import { call, put, takeEvery } from 'redux-saga/effects'
import UserService from './service'
import {
    USER_TYPES,
    addUserSuccess,
    addUserError,
    getUserSuccess,
    getUserError,
    updateUserSuccess,
    updateUserError,
    deleteUserSuccess,
    deleteUserError
} from './actions'

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
function* addUserStart({type, payload}) {
    try {
        console.log("saga", payload)
        const response = yield UserService.addUser(payload)
        yield put(addUserSuccess(response.data))
     
    } catch (err) {
        yield put(addUserError(err))
        console.log(err, "err")
    }
}

/**
 * Add product start saga funtion to invoke the API call
 * @param {*}  
 */
 function* getUserStart({type, payload}) {
    console.log(payload, "pay")
    try {
        const response = yield UserService.getUsers(payload)
        yield put(getUserSuccess(response.data.data.users))
        console.log(response.data.data.users,"saga")
    } catch (err) {
        yield put(getUserError(err))
        console.log(err, "err")
    }
}

/**
 * delete user saga funtion to invoke the API call
 * @param {*}  
 */
 function* deleteUserStart({type, payload}) {
    console.log(payload, "pay")
    try {
        const response = yield UserService.deleteUser(payload)
        yield put(deleteUserSuccess(response.data.data.users))
        console.log(response.data.data.users,"saga")
    } catch (err) {
        yield put(deleteUserError(err))
        console.log(err, "err")
    }
}

/**
 * Main Saga for users saga
 */
function* UsersSaga() {
    yield* [
        takeEvery(USER_TYPES.ADD_USER_START, addUserStart),
        takeEvery(USER_TYPES.GET_USER_START, getUserStart),
        takeEvery(USER_TYPES.DELETE_USER_START, deleteUserStart)
    ]
}

export default UsersSaga