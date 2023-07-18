import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';



const initialState = {

  products: [

    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
  ],
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state, // Access the currect stte current data present and update in that or add in that state
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };


    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };


    default: {

      return state;

    }

  }
}
// }

// }




// export const reducer = (state, action) => {
//   switch (action.type) {
//     // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
//     // Your comment here :- This case is responsible for updating the products state with the new products received from the action payload
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };
//     // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
//     // Your comment here:- updating the quantity of a specific product in the shopping cart.
//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state, // Access the currect stte current data present and update in that or add in that state
//         cartOpen: true,
//         cart: state.cart.map((product) => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity;
//           }
//           return product;
//         }),
//       };

//     // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
//     // Your comment here :-  responsible for removing a product from the shopping cart.When this action is dispatched, the reducer creates a new newState variable by filtering the existing cart state. It iterates over each product in the cart and checks if the _id of the product matches the _id provided in the action. If there is no match, the product is included in the newState array.
//     case REMOVE_FROM_CART:
//       let newState = state.cart.filter((product) => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState,
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: [],
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen,
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory,
//       };

//     // TODO: Add a comment describing what the default case is for
//     // Your comment here:- The default case in the reducer is used as a fallback when none of the previous cases match the action type. It is responsible for returning the current state unchanged.In the code snippet you provided, the default case simply returns the state object as is. This is necessary to ensure that if an action is dispatched with an unrecognized or unsupported type, the reducer does not modify the state and maintains its current values.Adding a default case is a best practice in Redux reducers to handle unexpected actions and prevent any unintended state modifications.
//     default:
//       return state;
//   }
// };

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
