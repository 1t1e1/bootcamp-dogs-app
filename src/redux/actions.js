import { TOGGLE_FAV, PAGE_LOADING, BUTTON_PROCESS } from "./type";

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAV,
        payload: id,
    };
};

export const toggleFavoriteAsync = (id) => {
    return (dispatch) => {
        // burada sira ile gerceklesmesi icin promise kullandik.
        dispatch(buttonProcess(id));
        console.log("outside set time ");
        setTimeout(() => {
            dispatch(toggleFavorite(id));
            dispatch(buttonProcess(""));
            // ??? islem yapiyor  diye kaldi. ikinci button tiklayinca hareket ediyor.
            console.log("inside set time ");
        }, 1000);
    };
};

export const togglePageLoading = (booly) => {
    return {
        type: PAGE_LOADING,
        payload: booly,
    };
};

export const buttonProcess = (id) => {
    return {
        type: BUTTON_PROCESS,
        payload: id,
    };
};
