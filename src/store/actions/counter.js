import * as actionsTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionsTypes.INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: actionsTypes.DECREMENT,
    }
}

export const add = (value) => {
    return {
        value,
        type: actionsTypes.ADD,
    }
}

export const substract = (value) => {
    return {
        value,
        type: actionsTypes.SUBSTRACT,
    }
}