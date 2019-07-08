import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_LOG_IN_SUCCESSFUL,
  AUTH_LOG_IN_ERROR,
  AUTH_REGISTER_SUCCESSFUL,
  AUTH_REGISTER_ERROR,
} from './types';

export const initialAuthState = {
  isAuthenticated: false,
  token: '',
  error: '',
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return state;
    case AUTH_LOG_IN_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
        error: '',
      };
    case AUTH_LOG_IN_ERROR:
    case AUTH_REGISTER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        error: action.payload.errorOnAuthentication,
      };
    case AUTH_LOG_OUT:
      return {
        token: '',
        isAuthenticated: false,
        error: '',
      };
    case AUTH_REGISTER_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
        error: '',
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default authReducer;
