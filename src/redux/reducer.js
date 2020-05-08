import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./type";
import { combineReducers } from "redux";

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            // if state has not  id  ekle
            return [...state, action.payload];
        case REMOVE_FROM_FAV:
            // if state has id  cikar
            return state.filter((dog) => dog.dogId !== action.payload);
        default:
            return state;
    }
};

export const rootReducer = combineReducers({ favorites: favoritesReducer });
