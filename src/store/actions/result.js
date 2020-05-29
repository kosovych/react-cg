import * as actionsTypes from './actionsTypes';

export const storeCounter = (setting) => {
    return {
        ...setting,
        type: actionsTypes.STORE_COUNTER,
    }
}

export const loaded = (value) => {
    return {
        isLoading: value,
        type: actionsTypes.LOAD,
    }
}

export const storeCounterAsync = (setting) => {
    return (dispatch) => {
        dispatch(loaded(true));
        setTimeout(() => {
            dispatch(storeCounter(setting));
        }, 2000);
    }
}

export const deleteCounter = (setting) => {
    return {
        ...setting,
        type: actionsTypes.DELETE_COUNTER,
    }
} 