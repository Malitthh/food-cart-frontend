import { VEHICLE_ACTION_TYPES } from "./actions";

// Initial state of the DaageReport Reducer
const INITIAL_STATE = {
    isLoading: false,
    getData: [],
    getError: '',
};

/**
 * Main Reducer function for Damage Reports
 * 
 * @param {object} state 
 * @param {const} type 
 * @param {object} payload
 * @returns 
 */
export default function vehicles(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case VEHICLE_ACTION_TYPES.ADD_DR_START:
            return setGetAddVehicleStart(state)

        case VEHICLE_ACTION_TYPES.ADD_DR_SUCCESS:
            return setGetAddVehicleSuccess(state, payload)

        case VEHICLE_ACTION_TYPES.ADD_DR_ERROR:
            return setGetAddVehicleError(state, payload)

        default:
            return state
    }
}

/**
 ************** Add Damage Reports **************
 */
 const setGetAddVehicleStart = (state) => ({
    ...state,
    isLoading: true,
    getError: null,
})

const setGetAddVehicleSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    getData:[...state.getData, payload ] ,
    getError: null,
})

const setGetAddVehicleError = (state, payload) => ({
    ...state,
    isLoading: false,
    getError: payload,
})
