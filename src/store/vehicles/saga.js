import { call, put, takeEvery } from 'redux-saga/effects'
import VehicleService from './service'
import {
    VEHICLE_ACTION_TYPES,
    addVeicleSuccess,
    addVeicleError
} from './actions'

/**
 * Add user start saga funtion to invoke the API call
 * @param {*}  
 */
function* addVehicleStart({type, payload}) {
    try {
        
        const response = yield VehicleService.add({
            make: "bmw",
            model: "i8",
            vehicleNo: "wp-0000",
            vehicleType: "car"
        })

        yield put(addVeicleSuccess(response.data))
        console.log(response,"saga", payload)
    } catch (err) {
        yield put(addVeicleError(err))
        console.log(err, "err")
    }
}

/**
 * Main Saga for Damage Reports
 */
function* vehicleSaga() {
    yield takeEvery(VEHICLE_ACTION_TYPES.ADD_VEHICLE_START, addVehicleStart)
}

export default vehicleSaga