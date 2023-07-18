import React, { createContext, useContext } from "react";
//import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };




// import { combineReducers } from 'redux';
// import userReducer from './userReducer';
// import cartReducer from './cartReducer';
// import settingsReducer from './settingsReducer';

// const initialState = {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: '',
// };

// export const setUser = (user) => {
//   return {
//     type: 'SET_USER',
//     payload: user,
//   };
// };
// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   settings: settingsReducer,
// });

// export default rootReducer;