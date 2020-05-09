import { TOGGLE_FAV } from "./type";
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

export const rootReducer = combineReducers({ favorites: favoritesReducer });
