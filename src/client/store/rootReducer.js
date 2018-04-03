import { combineReducers } from 'redux';
import redis from './reducers/redis';
import auth from './reducers/auth';
export default combineReducers({
  redis,
  auth
});
