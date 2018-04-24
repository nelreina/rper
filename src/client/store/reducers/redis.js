import { assign } from 'lodash';

const FETCHING = 'FETCHING_REDIS';
const FETCH_SUCCESS = 'FETCH_REDIS_SUCCESS';
const FETCH_ERROR = 'FETCH_REDIS_ERROR';

const initialState = {};

export const fetchRedis = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCHING });
  try {
    const payload = await api.get(`/redis`);
    dispatch({
      type: FETCH_SUCCESS,
      payload
    });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error });
  }
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
