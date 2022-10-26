import { ORDER_TYPES } from "./actions";

// Initial state of the DaageReport Reducer
const INITIAL_STATE = {
  isLoading: false,
  getOrder: [],
  allOrders: [],
  getError: "",
  getUpdatedOrder: {},
  singleOrder: {},
};

/**
 * Main Reducer function for Damage Reports
 *
 * @param {object} state
 * @param {const} type
 * @param {object} payload
 * @returns
 */
export default function orders(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ORDER_TYPES.ADD_ORDER_START:
      return setGetOrderStart(state);

    case ORDER_TYPES.ADD_ORDER_SUCCESS:
      return setGetOrderSuccess(state, payload);

    case ORDER_TYPES.ADD_ORDER_ERROR:
      return setGetOrderError(state, payload);

    case ORDER_TYPES.GET_ORDER_START:
      return setGetDBOrderStart(state);

    case ORDER_TYPES.GET_ORDER_SUCCESS:
      return setGetDBOrderSuccess(state, payload);

    case ORDER_TYPES.GET_ORDER_ERROR:
      return setGetDBOrderError(state, payload);

    case ORDER_TYPES.UPDATE_ORDER_START:
      return setGetUpdateOrderStart(state);

    case ORDER_TYPES.UPDATE_ORDER_SUCCESS:
      return setGetUpdateOrderSuccess(state, payload);

    case ORDER_TYPES.UPDATE_ORDER_ERROR:
      return setGetUpdateOrderError(state, payload);

    case ORDER_TYPES.DELETE_ORDER_START:
      return setGetDeleteOrderStart(state);

    case ORDER_TYPES.DELETE_ORDER_SUCCESS:
      return setGetDeleteOrderSuccess(state, payload);

    case ORDER_TYPES.DELETE_ORDER_ERROR:
      return setGetDeleteOrderError(state, payload);

    case ORDER_TYPES.GET_ONE_ORDER_START:
      return setGetOneOrderStart(state);

    case ORDER_TYPES.GET_ONE_ORDER_SUCCESS:
      return setGetOneOrderSuccess(state, payload);

    case ORDER_TYPES.GET_ONE_ORDER_ERROR:
      return setGetOneOrderError(state, payload);

    default:
      return state;
  }
}

/**
 ************** Add Order **************
 */
const setGetOrderStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetOrderSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getOrder: [...state.getOrder, payload],
  getError: null,
});

const setGetOrderError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Get Order **************
 */
const setGetDBOrderStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDBOrderSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  allOrders: payload,
  getError: null,
});

const setGetDBOrderError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Update Order **************
 */
const setGetUpdateOrderStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetUpdateOrderSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getUpdatedProduct: payload,
  getError: null,
});

const setGetUpdateOrderError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

/**
 ************** Delete Order **************
 */
const setGetDeleteOrderStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDeleteOrderSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getDeletedProduct: payload,
  getError: null,
});

const setGetDeleteOrderError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});

const setGetOneOrderStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetOneOrderSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  singleOrder: payload,
  getError: null,
});

const setGetOneOrderError = (state, payload) => ({
  ...state,
  isLoading: false,
  getError: payload,
});
