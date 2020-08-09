import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerBuilder from './redux/reducers/burgerBuilder';
import auth from './redux/reducers/auth';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduser = combineReducers({
    burgerBuilder,
    auth
});

const store = createStore(
    rootReduser,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
