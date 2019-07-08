/**
 * Module dependencies
 */
import { combineReducers } from 'redux';

/**
 * Reducers by module
 */
import authentication from './modules/Authentication';
import users from './modules/Users';

/**
 * Expose module
 */
export default combineReducers({
  authentication,
  users,
});
