import * as actionTypes from "./shopping-types";

export const selectCategory = (category) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: {
      id: category,
    },
  };
};


export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

