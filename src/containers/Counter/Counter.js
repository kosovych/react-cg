import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {
	increment,
	decrement,
	add,
	substract,
	storeCounterAsync,
	deleteCounter,
} from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

	render () {
			console.log(this.props.countersStore);

			return (
				<div>
					<div>
						<CounterOutput value={this.props.ctr} />
						<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
						<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
						<CounterControl label="Add 5" clicked={this.props.onAddCounter} />
						<CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />
					</div>
					<div>
							<button disabled={this.props.isLoading} onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
					</div>
					<ul>
						{this.props.countersStore.map(counter => {
								return <li onClick={() => this.props.onDeleteCounter(counter.id)} key={counter.id}>{counter.value}</li>
							}
						)}
					</ul>
				</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter.counter,
		countersStore: state.result.countersStore,
		isLoading: state.result.isLoading,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(increment()),
		onDecrementCounter: () => dispatch(decrement()),
		onAddCounter: () => dispatch(add(5)),
		onSubstractCounter: () => dispatch(substract(5)),
		onStoreCounter: (counter) => dispatch(storeCounterAsync({counter})),
		onDeleteCounter: (counterId) => dispatch(deleteCounter({counterId})),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);