import { createContext, useReducer } from "react";
import * as actions from "./actions";
export const CardContext = createContext([]);
const initialState = [];
const cardReducer = (state, action) => {
  switch (action.type) {
    case actions.ADDTOCARD:
      return [...state, action.payload];
    case actions.DELETEITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const CardProvider = ({ children }) => {
  const [allProductsInCard, dispatcher] = useReducer(cardReducer, initialState);
  const data = {
    dispatcher: dispatcher,
    allProductsInCard: allProductsInCard,
  };
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};

export default CardProvider;
