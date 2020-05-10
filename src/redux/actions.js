import { TOGGLE_FAV, PAGE_LOADING, BUTTON_TOGGLING } from "./type";

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

export const togglePageLoading = (bln) => {
    return {
        type: PAGE_LOADING,
        payload: bln,
    };
};

export const toggleButton = (id) => {
    return {
        type: BUTTON_TOGGLING,
        payload: id,
    };
};
