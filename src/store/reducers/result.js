import * as actions from '../actions';

const initialState = {
	countersStore: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.STORE_COUNTER:
			return {
				...state,
				countersStore: state.countersStore.concat({ value: action.counter, id: Date.now() })
			}

		case actions.DELETE_COUNTER:
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