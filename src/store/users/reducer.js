import { USER_TYPES } from "./actions";

// Initial state of the users Reducer
const INITIAL_STATE = {
  isLoading: false,
  getUser: [],
  allUsers: [],
  getError: "",
  status: false,
  getUpdatedProduct: {},
};

/**
 * Main Reducer function for users
 *
 * @param {object} state
 * @param {const} type
 * @param {object} payload
 * @returns
 */
export default function users(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case USER_TYPES.ADD_USER_START:
      return setGetUserStart(state);

    case USER_TYPES.ADD_USER_SUCCESS:
      return setGetUserSuccess(state, payload);

    case USER_TYPES.ADD_USER_ERROR:
      return setGetUserError(state, payload);

    case USER_TYPES.GET_USER_START:
      return setGetDBUserStart(state);

    case USER_TYPES.GET_USER_SUCCESS:
      return setGetDBUserSuccess(state, payload);

    case USER_TYPES.GET_USER_ERROR:
      return setGetDBUserError(state, payload);

    case USER_TYPES.UPDATE_USER_START:
      return setGetUpdateUserStart(state);

    case USER_TYPES.UPDATE_USER_SUCCESS:
      return setGetUpdateUserSuccess(state, payload);

    case USER_TYPES.UPDATE_USER_ERROR:
      return setGetUpdateUserError(state, payload);

    case USER_TYPES.DELETE_USER_START:
      return setGetDeleteUserStart(state);

    case USER_TYPES.DELETE_USER_SUCCESS:
      return setGetDeleteUserSuccess(state, payload);

    case USER_TYPES.DELETE_USER_ERROR:
      return setGetDeleteUserError(state, payload);

    default:
      return state;
  }
}

/**
 ************** Add User **************
 */
const setGetUserStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetUserSuccess = (state, payload) => ({
  ...state,
  status: true,
  isLoading: false,
  getUser: [...state.getUser, payload],
  getError: null,
});

const setGetUserError = (state, payload) => ({
  ...state,
  status: false,
  isLoading: false,
  getError: payload,
});

/**
 ************** Get User **************
 */
const setGetDBUserStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDBUserSuccess = (state, payload) => ({
  ...state,
  status: true,
  isLoading: false,
  allUsers: payload,
  getError: null,
});

const setGetDBUserError = (state, payload) => ({
  ...state,
  status: false,
  isLoading: false,
  getError: payload,
});

/**
 ************** Update User **************
 */
const setGetUpdateUserStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetUpdateUserSuccess = (state, payload) => ({
  ...state,
  status: true,
  isLoading: false,
  getUpdatedProduct: payload,
  getError: null,
});

const setGetUpdateUserError = (state, payload) => ({
  ...state,
  status: false,
  isLoading: false,
  getError: payload,
});

/**
 ************** Delete User **************
 */
const setGetDeleteUserStart = (state) => ({
  ...state,
  isLoading: true,
  getError: null,
});

const setGetDeleteUserSuccess = (state, payload) => ({
  ...state,
  status: true,
  isLoading: false,
  getDeletedProduct: payload,
  getError: null,
});

const setGetDeleteUserError = (state, payload) => ({
  ...state,
  status: false,
  isLoading: false,
  getError: payload,
});
