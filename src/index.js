import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import result from './store/reducers/result';
import counter from './store/reducers/counter';


const reduсer = combineReducers(
  {
    result,
    counter,
  }
);

const logger = state => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatch');
            const result = next(action);
            console.log('[Middleware] next state', state.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reduсer, composeEnhancers(
    applyMiddleware(logger)
));


ReactDOM.render(
		<Provider store={store}>
				<App />
		</Provider>,
		document.getElementById('root')
);
registerServiceWorker();
