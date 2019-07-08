import * as authService from '../../services/authentication';

import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_SUCCESSFUL,
  AUTH_LOG_OUT_SUCCESSFUL,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESSFUL,
} from './types';

/**
 * Login
 * @param {object} payload
 * @param {string} payload.email - Email of the user
 * @param {string} payload.password - Password of the user
 */
export const authLogIn = payload => async (dispatch) => {
  try {
    const authResponse = await authService.logIn(payload);
    dispatch({
      type: AUTH_LOG_IN_SUCCESSFUL,
      payload: {
        isAuthenticated: true,
        token: authResponse.token,
      },
    });
  } catch (err) {
    dispatch({
      type: AUTH_LOG_IN_ERROR,
      payload: {
        isAuthenticated: false,
        errorOnAuthentication: err.message,
      },
    });
  }
};

/**
 * Disconnect authenticated user
 */
export const authLogOut = () => (dispatch) => {
  dispatch({
    type: AUTH_LOG_OUT_SUCCESSFUL,
    payload: {
      isAuthenticated: false,
      token: null,
    },
  });
};

/**
 * Register new User
 * @param {object} payload
 * @param {object} payload.data - Body of the new user
 */
export const authRegister = payload => async (dispatch) => {
  try {
    const authResponse = await authService.register(payload.data);
    dispatch({
      type: AUTH_REGISTER_SUCCESSFUL,
      payload: {
        isAuthenticated: true,
        token: authResponse.token,
        id: authResponse.id,
      },
    });
  } catch (err) {
    dispatch({
      type: AUTH_REGISTER_ERROR,
      payload: {
        id: null,
        isAuthenticated: false,
        errorOnAuthentication: err.message,
      },
    });
  }
};
