import { string } from "yup";
import { AUTH_TYPES } from "./actions";

// Initial state of the Auth Reducer
const INITIAL_STATE = {
    isLoading: false,
    status: "",
    token: "",
    user: {},
    getError: '',
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
            return setGetLoginStart(state)

        case AUTH_TYPES.LOGIN_SUCCESS:
            return setGetLoginSuccess(state, payload)

        case AUTH_TYPES.LOGIN_ERROR:
            return setGetLoginError(state, payload)

        default:
            return state
    }
}

/**
 ************** Add Damage Reports **************
 */
 const setGetLoginStart = (state) => ({
    ...state,
    isLoading: true,
    getError: null,
})

const setGetLoginSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    status: payload.status,
    token: payload.token,
    user: payload.data.user,
    getError: null,
})

const setGetLoginError = (state, payload) => ({
    ...state,
    isLoading: false,
    getError: payload,
})
