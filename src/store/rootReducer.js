import { combineReducers } from 'redux'
import products from './products/reducer'
import vehicles from './vehicles/reducer'
import auth from './auth/reducer'
import cart from './cart/reducer'
import orders from './orders/reducer'
import users from './users/reducer'
// Importig the reducers
const reducers = {
    products,
    vehicles,
    auth,
    cart,
    orders,
    users
}

/**
 * Combinine all the reducers into one
 */
const rootReducer = combineReducers(
    reducers
)

export default rootReducer