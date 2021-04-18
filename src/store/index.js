// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux';

// import reducers from './reducers';

// const rootReducer = combineReducers({
//     reducers
// })

// const store = configureStore({
//   reducer: rootReducer
// })

// export default store

import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

import dataReducer from "./data";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
