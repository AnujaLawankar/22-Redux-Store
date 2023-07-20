// // Creates a Redux store that holds the state of the app. Only one store should exist.
// import { createStore } from 'redux';

// // Importing the reducer file that is mostly unchanged
// import reducers from './reducers';

// export default createStore(reducers);
import { createStore } from 'redux';

const initialState = {}; // Set your initial state here

function rootReducer(state = initialState, action) {
    // Define your reducer logic here
    return state;
}

const store = createStore(rootReducer);

export default store;
