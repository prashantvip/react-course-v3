import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";

export const CartContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => ([item.id, item])))
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { totalAmount, totalCost } = getTotals(state.cart)

    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    const remove = (id) => {
        dispatch({ type: REMOVE, payload: { id } })
    }

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } })
    }
    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } })
    }

    return <CartContext.Provider value={{ ...state, clearCart, remove, increase, decrease, totalAmount, totalCost }}>{children}</CartContext.Provider>
}