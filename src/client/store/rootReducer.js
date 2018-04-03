import { combineReducers } from 'redux';
import redis from './reducers/redis';
import { auth } from 'nelreina-web-utils';
export default combineReducers({
  redis,
  auth
});
