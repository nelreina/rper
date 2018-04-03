import { api } from 'nelreina-web-utils';
import { assign } from 'lodash';

const LOGININ = 'LOGININ';
const LOGOUT = 'LOGOUT';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const { post } = api;
const initialState = {
  isAuthenticated: false
};

export const login = () => async dispatch => {
  dispatch({ type: LOGININ });
  const payload = await post(`/api/login`, {});
  dispatch({
    type: LOGIN_SUCCESS,
    payload
  });
};
export const logout = param => ({
  type: LOGOUT
});

export const actionName = param => ({
  type: type,
  payload: payload
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return assign({}, state, {
        error: false,
        inprogress: false,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user
      });
    case LOGININ:
      return assign({}, state, { error: false, inprogress: true, user: {} });
    case LOGOUT:
    case LOGIN_ERROR:
      return assign({}, state, {
        error: true,
        message: payload,
        isAuthenticated: false,
        user: {}
      });

    default:
      return state;
  }
};
