import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart.filter((item) => action.payload.id !== item.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (item.amount === 1) {
          return false;
        }
        return { ...item, amount: item.amount - 1 };
      }
      return { ...item };
    });
    const filteredCart = newCart.filter((item) => item !== false);
    return { ...state, cart: filteredCart };
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
