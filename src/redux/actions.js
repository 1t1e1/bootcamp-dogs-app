import { TOGGLE_FAV } from "./type";
export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAV,
        payload: id,
    };
};

export const toggleFavoriteAsync = (id) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(toggleFavorite(id));
            setTimeout(() => {
                dispatch(toggleFavorite(id));
            }, 2000);
        }, 1000);
    };
};
