import { string } from "yup";
import { AUTH_TYPES } from "./actions";

// Initial state of the Auth Reducer
const INITIAL_STATE = {
  isLoading: false,
  status: "",
  token: "",
  user: {},
  getError: "",
};

/**
 * Main Reducer function for Auth
 *
 * @param {object} state
 * @param {const} type
 * @param {object} payload
 * @returns
 */
export default function auth(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case AUTH_TYPES.LOGIN_START:
      return setGetLoginStart(state);

    case AUTH_TYPES.LOGIN_SUCCESS:
      return setGetLoginSuccess(state, payload);

    case AUTH_TYPES.LOGIN_ERROR:
      return setGetLoginError(state, payload);

    case AUTH_TYPES.LOGOUT_START:
      return setGetLogoutStart(state);

    case AUTH_TYPES.LOGOUT_SUCCESS:
      return setGetLogoutSuccess(state, payload);

    case AUTH_TYPES.LOGOUT_ERROR:
      return setGetLogoutError(state, payload);

    case AUTH_TYPES.SIGNUP_START:
      return setGetSignupStart(state);

    case AUTH_TYPES.SIGNUP_SUCCESS:
      return setGetSignupSuccess(state, payload);

    case AUTH_TYPES.SIGNUP_ERROR:
      return setGetSignupError(state, payload);

    default:
      return state;
  }
}

/**
 ************** login **************
 */
const setGetLoginStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetLoginSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  status: payload.status,
  token: payload.token,
  user: payload.data.user,
  getError: null,
});

const setGetLoginError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** logout **************
 */
const setGetLogoutStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetLogoutSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  status: null,
  token: null,
  user: null,
  getError: null,
});

const setGetLogoutError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** logout **************
 */
 const setGetSignupStart = (state) => ({
    ...state,
    isLoading: true,
    getError: null,
  });
  
  const setGetSignupSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    status: payload.status,
    token: payload.token,
    user: payload.data.user,
    getError: null,
  });
  
  const setGetSignupError = (state, payload) => ({
    ...state,
    isLoading: false,
    getError: payload,
  });
