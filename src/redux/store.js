import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
// import rootReducer from "./rootReducer"
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(logger,thunk))

// console.log("store.js", rootReducer)
// console.log(store)

export default store;