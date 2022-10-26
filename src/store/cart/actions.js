export const CART_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  INCREMENT_QTY: "INCREMENT_QTY",
  DECREMENT_QTY: "DECREMENT_QTY",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  GET_NUMBER_CART: "GET_NUMBER_CART",
  EMPTY_CART: "EMPTY_CART",
};

export const addToCart = (payload) => ({ type: CART_TYPES.ADD_TO_CART, payload})
export const incrementQty = (payload) => ({ type: CART_TYPES.INCREMENT_QTY, payload})
export const decrementQty = (payload) => ({type: CART_TYPES.DECREMENT_QTY, payload})
export const removeFromCart = (payload) => ({type: CART_TYPES.REMOVE_FROM_CART, payload})
export const getNumberCart = (payload) => ({type: CART_TYPES.GET_NUMBER_CART, payload})
export const emptyCart = (payload) => ({type: CART_TYPES.EMPTY_CART, payload})

