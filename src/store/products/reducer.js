import { PRODUCTS_TYPES } from "./actions";

// Initial state of the DaageReport Reducer
const INITIAL_STATE = {
  isLoading: false,
  getProducts: [],
  allProducts: [],
  singleProduct:{},
  getError: "",
  getUpdatedProduct: {},
};

/**
 * Main Reducer function for Damage Reports
 *
 * @param {object} state
 * @param {const} type
 * @param {object} payload
 * @returns
 */
export default function products(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case PRODUCTS_TYPES.ADD_PRODUCT_START:
      return setGetProductsStart(state);

    case PRODUCTS_TYPES.ADD_PRODUCT_SUCCESS:
      return setGetProductsSuccess(state, payload);

    case PRODUCTS_TYPES.ADD_PRODUCT_ERROR:
      return setGetProductsError(state, payload);

    case PRODUCTS_TYPES.GET_PRODUCT_START:
      return setGetDBProductsStart(state);

    case PRODUCTS_TYPES.GET_PRODUCT_SUCCESS:
      return setGetDBProductsSuccess(state, payload);

    case PRODUCTS_TYPES.GET_PRODUCT_ERROR:
      return setGetDBProductsError(state, payload);

    case PRODUCTS_TYPES.UPDATE_PRODUCT_START:
      return setGetUpdateProductsStart(state);

    case PRODUCTS_TYPES.UPDATE_PRODUCT_SUCCESS:
      return setGetUpdateProductsSuccess(state, payload);

    case PRODUCTS_TYPES.UPDATE_PRODUCT_ERROR:
      return setGetUpdateProductsError(state, payload);

    case PRODUCTS_TYPES.DELETE_PRODUCT_START:
      return setGetDeleteProductsStart(state);

    case PRODUCTS_TYPES.DELETE_PRODUCT_SUCCESS:
      return setGetDeleteProductsSuccess(state, payload);

    case PRODUCTS_TYPES.DELETE_PRODUCT_ERROR:
      return setGetDeleteProductsError(state, payload);

    case PRODUCTS_TYPES.GET_SINGLE_PRODUCT_START:
      return setGetSingleProductsStart(state);

    case PRODUCTS_TYPES.GET_SINGLE_PRODUCT_SUCCESS:
      return setGetSingleProductsSuccess(state, payload);

    case PRODUCTS_TYPES.GET_SINGLE_PRODUCT_ERROR:
      return setGetSingleProductsError(state, payload);

    default:
      return state;
  }
}

/**
 ************** Add Products **************
 */
const setGetProductsStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetProductsSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getProducts: [...state.getProducts, payload],
  getError: null,
});

const setGetProductsError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Get Products **************
 */
const setGetDBProductsStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDBProductsSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  allProducts: payload,
  getError: null,
});

const setGetDBProductsError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Update Products **************
 */
const setGetUpdateProductsStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetUpdateProductsSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getUpdatedProduct: payload,
  getError: null,
});

const setGetUpdateProductsError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Delete Products **************
 */
const setGetDeleteProductsStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDeleteProductsSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getDeletedProduct: payload,
  getError: null,
});

const setGetDeleteProductsError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Get Single Products **************
 */
 const setGetSingleProductsStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetSingleProductsSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  singleProduct: payload,
  getError: null,
});

const setGetSingleProductsError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});
