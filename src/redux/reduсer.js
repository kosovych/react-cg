import * as actions from './actions';

const initState = {
    ingredients: {},
    totalPrice: 0,
    startPrice: 3,
    prices: {
        meat: 1.2,
        cheese: 0.5,
        salet: 0.1,
        becon: 0.6
    },
}

const reduсer = (state=initState, action) => {
    let ingredientTypeValue;
    let newState;
    switch (action.type) {
        case actions.ADD_INGRIDIEND:
            ingredientTypeValue = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] : 0;
            newState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: ingredientTypeValue + 1
                }
            };
            if(action.cb) {
                return reduсer(newState, {type: action.cb});
            }
            else {
                return newState;
            }
        case actions.REMOVE_INGRIDIEND:
            ingredientTypeValue = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] : 0;
            if(ingredientTypeValue === 0) return state;
            newState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: ingredientTypeValue - 1
                }
            }
            if(action.cb) {
                return reduсer(newState, {type: action.cb});
            }
            else {
                return newState;
            }
        case actions.CALC_PRICE:
            let ingrPrice = Object.entries(state.ingredients).reduce((price, [type, count]) => {
                return price + count * state.prices[type];
              }, 0);
            console.log(ingrPrice);
            return {
                ...state,
                totalPrice: state.startPrice + ingrPrice
            }
        case actions.RESET_INGRIDIENTS:
            return {
                ...state,
                ingredients: {},
                totalPrice: 0,
            };
            
    }
    return state
}

export default reduсer;