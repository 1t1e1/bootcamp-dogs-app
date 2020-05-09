import { TOGGLE_FAV } from "./type";
export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAV,
        payload: id,
    };
};
