import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduсer from './redux/reduсer';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reduсer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
