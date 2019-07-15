import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// step 1 import createStore
import { createStore } from 'redux';
// step 10 import bowieReducer
// import bowieReducer from './reducers/bowieReducer';
// import headerReducer from './reducers/headerReducer'
import reducer from './reducers'
// step 11 import Provider
import { Provider } from 'react-redux';

// step 2 create the store constant
// questions for students:
//  - what do you need to pass into this function? 
//  - what does it actually do?
const store = createStore(reducer);
// step 3 create the reducer folder
// step 4 create the bowieReducer.js file

// step 13 check that the store is functional
console.log("Here is our store:", store.getState());

// ReactDOM.render(<App />, document.getElementById('root'));

// step 12 wrap App in the Provider
// the provider allows the rest of our app to have access to the state
// in the reducers
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
