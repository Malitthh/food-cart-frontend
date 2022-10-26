/**
 * Define Action types for Damage Reports
 */
export const USER_TYPES = {
    ADD_USER_START: "ADD_USER_START",
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    ADD_USER_ERROR: "ADD_USER_ERROR",

    GET_USER_START: "GET_USER_START",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_ERROR: "GET_USER_ERROR",

    UPDATE_USER_START: "UPDATE_USER_START",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
    UPDATE_USER_ERROR: "UPDATE_USER_ERROR",

    DELETE_USER_START: "DELETE_USER_START",
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_ERROR: "DELETE_USER_ERROR",
};
 
/**
 * AddProductStart Action
 * 
 * once you click on add product  this will initiate the action
 * @param {object} payload 
 * @returns 
 */
export const addUserStart = (payload) => ({type: USER_TYPES.ADD_USER_START,payload})
export const addUserSuccess = (payload) => ({ type: USER_TYPES.ADD_USER_SUCCESS, payload })
export const addUserError = (payload) => ({type: USER_TYPES.ADD_USER_ERROR, payload })

/** GET UserS ACTIONS */
export const getUserStart = (payload) => ({ type: USER_TYPES.GET_USER_START, payload})
export const getUserSuccess = (payload) => ({ type: USER_TYPES.GET_USER_SUCCESS, payload})
export const getUserError = (payload) => ({type: USER_TYPES.GET_USER_ERROR, payload})

/** Update UserS ACTIONS */
export const updateUserStart = (payload) => ({ type: USER_TYPES.UPDATE_USER_START, payload})
export const updateUserSuccess = (payload) => ({ type: USER_TYPES.UPDATE_USER_SUCCESS, payload})
export const updateUserError = (payload) => ({type: USER_TYPES.UPDATE_USER_ERROR, payload})

/** Delete UserS ACTIONS */
export const deleteUserStart = (payload) => ({ type: USER_TYPES.DELETE_USER_START, payload})
export const deleteUserSuccess = (payload) => ({ type: USER_TYPES.DELETE_USER_SUCCESS, payload})
export const deleteUserError = (payload) => ({type: USER_TYPES.DELETE_USER_ERROR, payload})