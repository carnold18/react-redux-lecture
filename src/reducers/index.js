import { combineReducers } from 'redux';
import headerReducer from './headerReducer'
import bowieReducer from './bowieReducer'

// this will return another object that will point to 
// our other objects when needed

export default combineReducers({
    headerReducer,
    bowieReducer
})