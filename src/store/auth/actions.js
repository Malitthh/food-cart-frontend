/**LOGIN_TYPES
 * Define Action types for vehicles
 */
 export const AUTH_TYPES = {
    LOGIN_START: "LOGIN_START",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",

    LOGOUT_START: "LOGOUT_START",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_ERROR: "LOGOUT_ERROR",

    SIGNUP_START: "SIGNUP_START",
    SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
    SIGNUP_ERROR: "SIGNUP_ERROR",
};
 
/**
 * loginStart Action
 * 
 * once you click on add damage report this will initiate the action
 * @param {object} payload 
 * @returns 
 */
export const loginStart = (payload) => ({
    type: AUTH_TYPES.LOGIN_START,
    payload
})

/**
 * loginSuccess
 * 
 * if its success call, this will store the damage report 
 * @param {object} payload 
 * @returns 
 */
export const loginSuccess = (payload) => ({
    type: AUTH_TYPES.LOGIN_SUCCESS,
    payload,
})

/**
 * loginError
 * 
 * if theres any error this will store and returns the error
 * 
 * @param {Object} payload 
 * @returns 
 */
export const loginError = (payload) => ({
    type: AUTH_TYPES.LOGIN_ERROR,
    payload,
})

/**
 * loginStart Action
 * 
 * once you click on add damage report this will initiate the action
 * @param {object} payload 
 * @returns 
 */
 export const logoutStart = (payload) => ({
    type: AUTH_TYPES.LOGOUT_START,
    payload
})

/**
 * loginSuccess
 * 
 * if its success call, this will store the damage report 
 * @param {object} payload 
 * @returns 
 */
export const logoutSuccess = (payload) => ({
    type: AUTH_TYPES.LOGOUT_SUCCESS,
    payload,
})

/**
 * loginError
 * 
 * if theres any error this will store and returns the error
 * 
 * @param {Object} payload 
 * @returns 
 */
export const logoutError = (payload) => ({
    type: AUTH_TYPES.LOGOUT_ERROR,
    payload,
})

/**
 * loginStart Action
 * 
 * once you click on add damage report this will initiate the action
 * @param {object} payload 
 * @returns 
 */
 export const signupStart = (payload) => ({
    type: AUTH_TYPES.SIGNUP_START,
    payload
})

/**
 * loginSuccess
 * 
 * if its success call, this will store the damage report 
 * @param {object} payload 
 * @returns 
 */
export const signupSuccess = (payload) => ({
    type: AUTH_TYPES.SIGNUP_SUCCESS,
    payload,
})

/**
 * loginError
 * 
 * if theres any error this will store and returns the error
 * 
 * @param {Object} payload 
 * @returns 
 */
export const signupError = (payload) => ({
    type: AUTH_TYPES.SIGNUP_ERROR,
    payload,
})