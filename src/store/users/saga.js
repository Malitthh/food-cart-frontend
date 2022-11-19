import { call, put, takeEvery } from 'redux-saga/effects'
import UserService from './service'
import { toast } from "react-toastify";

import {
    USER_TYPES,
    addUserSuccess,
    addUserError,
    getUserSuccess,
    getUserError,
    updateUserSuccess,
    updateUserError,
    deleteUserSuccess,
    deleteUserError,
    getSingleUserSuccess,
    getSingleUserError
} from './actions'

/**
 * Add user start saga function to invoke the API call
 * @param {*}  
 */
function* addUserStart({type, payload}) {
    try {
        const response = yield UserService.addUser(payload)
        yield put(addUserSuccess(response.data))
        toast.success("Successfully Added !");
    } catch (err) {
        yield put(addUserError(err.response.data))
        toast.error(err.response.data.message);
        console.log(err.response.data, "err")
    }
}

/**
 * Add user start saga function to invoke the API call
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
        toast.error(err.response.data.message);
        console.log(err, "err")
    }
}

/**
 * delete user saga function to invoke the API call
 * @param {*}  
 */
 function* deleteUserStart({type, payload}) {
    console.log(payload, "pay")
    try {
        const response = yield UserService.deleteUser(payload)
        yield put(deleteUserSuccess(response.data.data.users))
        toast.success("Successfully Deleted !");
    } catch (err) {
        yield put(deleteUserError(err))
        toast.error(err.response.data.message);
        console.log(err, "err")
    }
}

/**
 * update user saga function to invoke the API call
 * @param {*}  
 */
 function* updateUserStart({type, payload}) {
    console.log(payload, "pay")
    try {
        const response = yield UserService.updateUser(payload)
        yield put(updateUserSuccess(response.data.data.users))
        toast.success("Successfully Updated !");
        
    } catch (err) {
        yield put(updateUserError(err))
        toast.error(err.response.data.message);
        console.log(err, "err")
    }
}

/**
 * Add user start saga function to invoke the API call
 * @param {*}  
 */
 function* getSingleUserStart({type, payload}) {
    try {
        const response = yield UserService.getOneUser(payload)
        yield put(getSingleUserSuccess(response.data.data.users))
        console.log(response.data.data.users,"saga")
    } catch (err) {
        yield put(getSingleUserError(err))
        toast.error(err.response.data.message);
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
        takeEvery(USER_TYPES.DELETE_USER_START, deleteUserStart),
        takeEvery(USER_TYPES.UPDATE_USER_START, updateUserStart),
        takeEvery(USER_TYPES.GET_SINGLE_USER_START, getSingleUserStart)
    ]
}

export default UsersSaga