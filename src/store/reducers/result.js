import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
	countersStore: [],
	isLoading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.LOAD:
		return {
			...state,
			isLoading: action.isLoading,
		}
		case actionsTypes.STORE_COUNTER:
			return {
				...state,
				isLoading: false,
				countersStore: state.countersStore.concat({ value: action.counter, id: Date.now() })
			}

		case actionsTypes.DELETE_COUNTER:
			const filteredCountersStore = state.countersStore.filter(counter => counter.id !== action.counterId)
			return {
				...state,
				countersStore: filteredCountersStore
			}

		default:
			return state;
	}

};

export default reducer;