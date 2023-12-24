import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from "./actions";
import { getTotals } from "./utils";

const AppContext = createContext();

const initialState = {
  cart: cartItems,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  function remove(id) {
    dispatch({ type: REMOVE, payload: { id } });
  }

  function increase(id) {
    dispatch({ type: INCREASE, payload: { id } });
  }

  function decrease(id) {
    dispatch({ type: DECREASE, payload: { id } });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
