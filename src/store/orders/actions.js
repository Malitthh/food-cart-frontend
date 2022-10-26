export const ORDER_TYPES = {
    ADD_ORDER_START: "ADD_ORDER_START",
    ADD_ORDER_SUCCESS: "ADD_ORDER_SUCCESS",
    ADD_ORDER_ERROR: "ADD_ORDER_ERROR",

    GET_ORDER_START: "GET_ORDER_START",
    GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS",
    GET_ORDER_ERROR: "GET_ORDER_ERROR",

    UPDATE_ORDER_START: "UPDATE_ORDER_START",
    UPDATE_ORDER_SUCCESS: "UPDATE_ORDER_SUCCESS",
    UPDATE_ORDER_ERROR: "UPDATE_ORDER_ERROR",

    DELETE_ORDER_START: "DELETE_ORDER_START",
    DELETE_ORDER_SUCCESS: "DELETE_ORDER_SUCCESS",
    DELETE_ORDER_ERROR: "DELETE_ORDER_ERROR",

    GET_ONE_ORDER_START: "GET_ONE_ORDER_START",
    GET_ONE_ORDER_SUCCESS: "GET_ONE_ORDER_SUCCESS",
    GET_ONE_ORDER_ERROR: "GET_ONE_ORDER_ERROR",
};

export const addOrderStart = (payload) => ({type: ORDER_TYPES.ADD_ORDER_START,payload})
export const addOrderSuccess = (payload) => ({ type: ORDER_TYPES.ADD_ORDER_SUCCESS, payload })
export const addOrderError = (payload) => ({type: ORDER_TYPES.ADD_ORDER_ERROR, payload })

/** GET OrderS ACTIONS */
export const getOrderStart = (payload) => ({ type: ORDER_TYPES.GET_ORDER_START, payload})
export const getOrderSuccess = (payload) => ({ type: ORDER_TYPES.GET_ORDER_SUCCESS, payload})
export const getOrderError = (payload) => ({type: ORDER_TYPES.GET_ORDER_ERROR, payload})

/** Update OrderS ACTIONS */
export const updateOrderStart = (payload) => ({ type: ORDER_TYPES.UPDATE_ORDER_START, payload})
export const updateOrderSuccess = (payload) => ({ type: ORDER_TYPES.UPDATE_ORDER_SUCCESS, payload})
export const updateOrderError = (payload) => ({type: ORDER_TYPES.UPDATE_ORDER_ERROR, payload})

/** Delete OrderS ACTIONS */
export const deleteOrderStart = (payload) => ({ type: ORDER_TYPES.DELETE_ORDER_START, payload})
export const deleteOrderSuccess = (payload) => ({ type: ORDER_TYPES.DELETE_ORDER_SUCCESS, payload})
export const deleteOrderError = (payload) => ({type: ORDER_TYPES.DELETE_ORDER_ERROR, payload})

export const getOneOrderStart = (payload) => ({ type: ORDER_TYPES.GET_ONE_ORDER_START, payload})
export const getOneOrderSuccess = (payload) => ({ type: ORDER_TYPES.GET_ONE_ORDER_SUCCESS, payload})
export const getOneOrderError = (payload) => ({type: ORDER_TYPES.GET_ONE_ORDER_ERROR, payload})