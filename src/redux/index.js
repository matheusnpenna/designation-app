import { combineReducers } from 'redux';
import userActions, { reducer as userReducer } from './user';
import uiActions, { reducer as uiReducer } from './ui';

export default combineReducers({
  user: userReducer,
  ui: uiReducer
});

export { userActions, uiActions };