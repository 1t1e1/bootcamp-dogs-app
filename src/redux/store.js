// favorites: [],
// loadingFavorites: false,
//  waitApiProcess: "",

import { rootReducer } from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    // compose(
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    // ),
);
