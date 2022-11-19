import { CART_TYPES } from "./actions";

const INITIAL_STATE = {
  numberCart: 0,
  cart: [],
  _products: [],
};

export default function cart(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case CART_TYPES.GET_NUMBER_CART:
      return {
        ...state,
      };
    case CART_TYPES.ADD_TO_CART:
      console.log(payload, "payload", type);
      if (state.numberCart === 0) {
        let _cart = {
          id: payload._id,
          quantity: 1,
          productName: payload.productName,
          image: payload.photos[0].url,
          price: payload.price,
        };
        state.cart.push(_cart);
      } else {
        let check = false;
        state.cart.map((item, key) => {
          if (item.id === payload._id) {
            state.cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: payload._id,
            quantity: 1,
            productName: payload.productName,
            image: payload.photos[0].url,
            price: payload.price,
          };
          state.cart.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case CART_TYPES.INCREMENT_QTY:
      console.log(payload.id, "payload", state.cart[0]);
      const index = state.cart.findIndex(( c) => c.id === payload.id)
      state.numberCart++;
      state.cart[index].quantity++;

      return {
        ...state,
      };
    case CART_TYPES.DECREMENT_QTY:
      const indexde = state.cart.findIndex(( c) => c.id === payload.id)
      let quantity = state.cart[indexde].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.cart[indexde].quantity--;
      }

      return {
        ...state,
      };
    case CART_TYPES.REMOVE_FROM_CART:
      const removeIndex = state.cart.findIndex(( c) => c.id === payload.id)
      let quantity_ = state.cart[removeIndex].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        cart: state.cart.filter((item) => {
          return item.id != state.cart[removeIndex].id;
        }),
      };
    case CART_TYPES.EMPTY_CART:
      return {
        ...state,
        numberCart: 0,
        cart: []
      };

    default:
      return state;
  }
}
