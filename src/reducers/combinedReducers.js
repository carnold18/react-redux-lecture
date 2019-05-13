import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import tcfReducer from './tcfReducer';

export default combineReducers({
  headerReducer,
  tcfReducer
})