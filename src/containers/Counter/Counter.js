import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

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
							<button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
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
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
		onDecrementCounter: () => dispatch({type: actions.DECREMENT}),
		onAddCounter: () => dispatch({type: actions.ADD, value: 5}),
		onSubstractCounter: () => dispatch({type: actions.SUBSTRACT, value: 5}),
		onStoreCounter: (counter) => dispatch({type: actions.STORE_COUNTER, counter}),
		onDeleteCounter: (counterId) => dispatch({type: actions.DELETE_COUNTER, counterId}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);