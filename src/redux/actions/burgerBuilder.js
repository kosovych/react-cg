import * as actionTypes from './actionTypes';
import axios from '../../axios/order-lost';

export const addIngredient = (ingredientType) => {
    return {
        type: actionTypes.ADD_INGRIDIEND,
        ingredientType,
        cb: actionTypes.CALC_PRICE,
    }
}
export const removeIngredient = (ingredientType) => {
    return {
        type: actionTypes.REMOVE_INGRIDIEND,
        ingredientType,
        cb: actionTypes.CALC_PRICE,
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGRIDIEND,
        ingredients: ingredients,
    }
}

export const setError = (hasError) => {
    return {
        type: actionTypes.SET_ERROR,
        value: hasError,
    }
}

export const getIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then(res => dispatch(setIngredients(res.data)))
        .catch(err => err)
    }
}

