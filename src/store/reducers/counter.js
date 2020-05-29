import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
	counter: 0,
};

const reducer = (state = initialState, action) => {
	
	switch (action.type) {

		case actionsTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}

		case actionsTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		case actionsTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value
			}

		case actionsTypes.SUBSTRACT:
			return {
				...state,
				counter: state.counter - action.value
			}

		default:
			return state;
	}

};

export default reducer;