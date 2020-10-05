/* eslint-disable default-case */
import * as actions from '../actions/actionTypes';

const initState = {
    ingredients: null,
    totalPrice: 0,
    startPrice: 3,
    loading: true,
    error: false,
    prices: {
        meat: 1.2,
        cheese: 0.5,
        salet: 0.1,
        becon: 0.6
    },
    isBuildingBugger: false,
}

const reducer = (state=initState, action) => {
    let ingredientTypeValue;
    let newState;
    switch (action.type) {
        case actions.ADD_INGREDIENTS:
            ingredientTypeValue = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] : 0;
            newState = {
                ...state,
                isBuildingBugger: true,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: ingredientTypeValue + 1
                }
            };
            if(action.cb) {
                return reducer(newState, {type: action.cb});
            }
            else {
                return newState;
            }
        case actions.REMOVE_INGREDIENTS:
            ingredientTypeValue = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] : 0;
            if(ingredientTypeValue === 0) return state;
            newState = {
                ...state,
                isBuildingBugger: true,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: ingredientTypeValue - 1
                }
            }
            if(action.cb) {
                return reducer(newState, {type: action.cb});
            }
            else {
                return newState;
            }
        case actions.CALC_PRICE:
            let ingrPrice = Object.entries(state.ingredients).reduce((price, [type, count]) => {
                return price + count * state.prices[type];
              }, 0);
            return {
                ...state,
                totalPrice: state.startPrice + ingrPrice
            }
        case actions.RESET_Ingredients:
            return {
                ...state,
                ingredients: {},
                totalPrice: 0,
            };
        case actions.SET_INGREDIENTS:
            return {
                ...state,
                loading: false,
                isBuildingBugger: false,
                error: false,
                ingredients: action.ingredients,
            };
        case actions.SET_ERROR:
            return {
                ...state,
                error: action.value,
            };
    }
    return state
}

export default reducer;
