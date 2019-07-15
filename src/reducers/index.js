import { combineReducers } from 'redux';
import headerReducer from './headerReducer'
import bowieReducer from './bowieReducer'

// this will return another object that will point to 
// our other objects when needed
// name this file index since it hold all the reducers

export default combineReducers({
    headerReducer,
    bowieReducer
})