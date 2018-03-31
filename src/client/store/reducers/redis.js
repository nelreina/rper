import { api } from 'nelreina-web-utils';
import { assign } from 'lodash';

const FETCHING = 'FETCHING_REDIS';
const FETCH_SUCCESS = 'FETCH_REDIS_SUCCESS';
const FETCH_ERROR = 'FETCH_REDIS_ERROR';

const initialState = {};

export const fetchRedis = () => async dispatch => {
  dispatch({ type: FETCHING });
  const payload = await api.get(`/api/redis`);
  dispatch({
    type: FETCH_SUCCESS,
    payload
  });
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SUCCESS:
      return assign({}, state, {
        error: false,
        fetching: false,
        data: payload
      });
    case FETCHING:
      return assign({}, state, {
        error: false,
        fetching: true,
        data: undefined
      });
    case FETCH_ERROR:
      return assign({}, state, { error: true, message: payload, data: [] });

    default:
      return state;
  }
};
