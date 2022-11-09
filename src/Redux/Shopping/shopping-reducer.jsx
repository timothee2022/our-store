import * as actionTypes from "./shopping-types";

const initialState = {

  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' }
  ],

  products: [

    {
      id: 1,
      name: 'laptop',
      description: 'nice looking laptop',
      category: 'electronics',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },

    {
      id: 2,
      name: 'lphone',
      description: 'samsung phone',
      category: 'electronics',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },

    {
      id: 3,
      name: 'apple',
      description: 'green american apple',
      category: 'food',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1522507806580-0be3530796be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },

    {
      id: 4,
      name: 'bread',
      description: 'white bread',
      category: 'food',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },

  ],

  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return initialState.filter(product => product.category === action.payload)
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    default:
      return state;
  }
};

export default shopReducer;