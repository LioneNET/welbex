import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from './reducers/index';

const store = createStore(combineReducers(rootReducers), applyMiddleware(thunk))

export default store