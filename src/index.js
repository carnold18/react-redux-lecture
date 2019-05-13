import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/combinedReducers'

const store = createStore(reducer);
console.log('here is your store', store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
