/**
 * Define Action types for Damage Reports
 */
export const PRODUCTS_TYPES = {
    ADD_PRODUCT_START: "ADD_PRODUCT_START",
    ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_ERROR: "ADD_PRODUCT_ERROR",

    GET_PRODUCT_START: "GET_PRODUCT_START",
    GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
    GET_PRODUCT_ERROR: "GET_PRODUCT_ERROR",

    UPDATE_PRODUCT_START: "UPDATE_PRODUCT_START",
    UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_ERROR: "UPDATE_PRODUCT_ERROR",

    DELETE_PRODUCT_START: "DELETE_PRODUCT_START",
    DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_ERROR: "DELETE_PRODUCT_ERROR",

    GET_SINGLE_PRODUCT_START: "GET_SINGLE_PRODUCT_START",
    GET_SINGLE_PRODUCT_SUCCESS: "GET_SINGLE_PRODUCT_SUCCESS",
    GET_SINGLE_PRODUCT_ERROR: "GET_SINGLE_PRODUCT_ERROR",
};
 
/**
 * AddProductStart Action
 * 
 * once you click on add product  this will initiate the action
 * @param {object} payload 
 * @returns 
 */
export const addProductStart = (payload) => ({type: PRODUCTS_TYPES.ADD_PRODUCT_START,payload})
export const addProductSuccess = (payload) => ({ type: PRODUCTS_TYPES.ADD_PRODUCT_SUCCESS, payload })
export const addProductError = (payload) => ({type: PRODUCTS_TYPES.ADD_PRODUCT_ERROR, payload })

/** GET PRODUCTS ACTIONS */
export const getProductStart = (payload) => ({ type: PRODUCTS_TYPES.GET_PRODUCT_START, payload})
export const getProductSuccess = (payload) => ({ type: PRODUCTS_TYPES.GET_PRODUCT_SUCCESS, payload})
export const getProductError = (payload) => ({type: PRODUCTS_TYPES.GET_PRODUCT_ERROR, payload})

/** Update PRODUCTS ACTIONS */
export const updateProductStart = (payload) => ({ type: PRODUCTS_TYPES.UPDATE_PRODUCT_START, payload})
export const updateProductSuccess = (payload) => ({ type: PRODUCTS_TYPES.UPDATE_PRODUCT_SUCCESS, payload})
export const updateProductError = (payload) => ({type: PRODUCTS_TYPES.UPDATE_PRODUCT_ERROR, payload})

/** Delete PRODUCTS ACTIONS */
export const deleteProductStart = (payload) => ({ type: PRODUCTS_TYPES.DELETE_PRODUCT_START, payload})
export const deleteProductSuccess = (payload) => ({ type: PRODUCTS_TYPES.DELETE_PRODUCT_SUCCESS, payload})
export const deleteProductError = (payload) => ({type: PRODUCTS_TYPES.DELETE_PRODUCT_ERROR, payload})

/** GET PRODUCTS ACTIONS */
export const getSingleProductStart = (payload) => ({ type: PRODUCTS_TYPES.GET_SINGLE_PRODUCT_START, payload})
export const getSingleProductSuccess = (payload) => ({ type: PRODUCTS_TYPES.GET_SINGLE_PRODUCT_SUCCESS, payload})
export const getSingleProductError = (payload) => ({type: PRODUCTS_TYPES.GET_SINGLE_PRODUCT_ERROR, payload})