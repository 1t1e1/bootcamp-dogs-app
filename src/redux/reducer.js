import { TOGGLE_FAV, PAGE_LOADING, BUTTON_PROCESS } from "./type";
import { combineReducers } from "redux";

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const foundDog = state.find(
                (favorite) => favorite === action.payload,
            );
            if (foundDog) {
                return state.filter((dog) => dog !== action.payload);
            } else {
                return [...state, action.payload];
            }
        default:
            return state;
    }
};

const loadingReducer = (
    state = { pageLoading: true, buttonProcess: "" },
    action,
) => {
    switch (action.type) {
        case PAGE_LOADING:
            state.pageLoading = action.payload;
            return state;
        case BUTTON_PROCESS:
            // id  tutmasi gerekiyor.
            state.buttonProcess = action.payload;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    favorites: favoritesReducer,
    loading: loadingReducer,
});
