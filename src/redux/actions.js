export const addFavorite = (id) => {
    return {
        type: "ADD_TO_FAV",
        payload: id,
    };
};
export const removeFavorite = (id) => {
    return {
        type: "REMOVE_FROM_FAV",
        payload: id,
    };
};
