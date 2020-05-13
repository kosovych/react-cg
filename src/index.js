import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import result from './store/reducers/result';
import counter from './store/reducers/counter';


const rootReduser = combineReducers(
  {
    result,
    counter,
  }
);

const store = createStore(rootReduser);

ReactDOM.render(
		<Provider store={store}>
				<App />
		</Provider>,
		document.getElementById('root')
);
registerServiceWorker();