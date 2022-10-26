/**VEHICLE_ACTION_TYPES
 * Define Action types for vehicles
 */
export const VEHICLE_ACTION_TYPES = {
    ADD_VEHICLE_START: "ADD_VEHICLE_START",
    ADD_VEHICLE_SUCCESS: "ADD_VEHICLE_SUCCESS",
    ADD_VEHICLE_ERROR: "ADD_VEHICLE_ERROR",
};
 
/**
 * AddVehicleStart Action
 * 
 * once you click on add damage report this will initiate the action
 * @param {object} payload 
 * @returns 
 */
export const addVehicleStart = (payload) => ({
    type: VEHICLE_ACTION_TYPES.ADD_VEHICLE_START,
    payload
})

/**
 * addVehicleSuccess
 * 
 * if its success call, this will store the damage report 
 * @param {object} payload 
 * @returns 
 */
export const addVehicleSuccess = (payload) => ({
    type: VEHICLE_ACTION_TYPES.ADD_VEHICLE_SUCCESS,
    payload,
})

/**
 * addVehicleError
 * 
 * if theres any error this will store and returns the error
 * 
 * @param {Object} payload 
 * @returns 
 */
export const addVehicleError = (payload) => ({
    type: VEHICLE_ACTION_TYPES.ADD_VEHICLE_ERROR,
    payload,
})