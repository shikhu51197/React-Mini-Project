import { applyMiddleware, legacy_createStore , compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer, composeEnhencer(applyMiddleware(thunk)))

export default store
