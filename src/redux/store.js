// favorites: [],
// loadingFavorites: false,
//  waitApiProcess: "",

import { rootReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
