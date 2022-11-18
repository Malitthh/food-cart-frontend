import { call, put, takeEvery } from "redux-saga/effects";
import AuthService from "./service";
import { toast } from "react-toastify";
import {
  AUTH_TYPES,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  signupSuccess,
  signupError,
} from "./actions";

/**
 * Add user start saga funtion to invoke the API call
 * @param {*}
 */
function* loginStart({ type, payload }) {
  try {
    console.log("saga");
    const response = yield AuthService.login(payload);

    yield put(loginSuccess(response.data));
    localStorage.setItem("@token", response.data.token);
    localStorage.setItem("@user", response.data.user);
    console.log(response, "saga", payload);
  } catch (err) {
    yield put(loginError(err.response.data));
    toast.error(err.response.data.message);
  }
}

/**
 * Add user start saga funtion to invoke the API call
 * @param {*}
 */
function* logoutStart({ type, payload }) {
  try {
    const response = "";
    yield put(logoutSuccess(response));
    localStorage.setItem("@token", "");
    localStorage.setItem("@user", "");
  } catch (err) {
    yield put(logoutError(err));
    toast.error(err.response.data.message);
  }
}

/**
 * Add user start saga funtion to invoke the API call
 * @param {*}
 */
function* signupStart({ type, payload }) {
  try {
    console.log("saga");
    const response = yield AuthService.signup(payload);

    yield put(signupSuccess(response.data));
    localStorage.setItem("@token", response.data.token);
    localStorage.setItem("@user", response.data.user);
    console.log(response, "saga", payload);
  } catch (err) {
    yield put(signupError(err.response.data));
    toast.error(err.response.data.message);
  }
}

/**
 * Main Saga for auth
 */
function* authSaga() {
  yield* [
    takeEvery(AUTH_TYPES.LOGIN_START, loginStart),
    takeEvery(AUTH_TYPES.LOGOUT_START, logoutStart),
    takeEvery(AUTH_TYPES.SIGNUP_START, signupStart),
  ];
}

export default authSaga;
