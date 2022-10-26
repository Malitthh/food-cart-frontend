/**LOGIN_TYPES
 * Define Action types for vehicles
 */
 export const AUTH_TYPES = {
    LOGIN_START: "LOGIN_START",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
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