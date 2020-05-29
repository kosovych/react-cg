import * as actions from './actions/actions';

const initialState = {
	counter: 0,
	countersStore: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}

		case actions.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		case actions.ADD:
			return {
				...state,
				counter: state.counter + action.value
			}

		case actions.SUBSTRACT:
			return {
				...state,
				counter: state.counter + action.value
			}

		case actions.STORE_COUNTER:
			return {
				...state,
				countersStore: state.countersStore.concat({ value: state.counter, id: Date.now() })
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