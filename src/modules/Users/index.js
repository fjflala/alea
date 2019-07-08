import {
  USERS_GET_LIST_SUCCESSFUL,
  USERS_GET_USER_SUCCESSFUL,
  USERS_CREATE_USER_SUCCESSFUL,
  USERS_EDIT_USER_SUCCESSFUL,
  USERS_CLEAN_CREATED_USER,
  USERS_CLEAN_EDITED_USER,
  USERS_DELETE_USER_SUCCESSFUL,
} from './types';

export const initialUsersState = {
  page: null,
  per_page: null,
  total: null,
  total_pages: null,
  data: [],
  selectedUser: {},
  createdUser: {},
  editedUser: {},
  userDeletedSuccessfully: false,
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case USERS_GET_LIST_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case USERS_GET_USER_SUCCESSFUL:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case USERS_CREATE_USER_SUCCESSFUL:
      return {
        ...state,
        createdUser: action.payload,
      };
    case USERS_EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        editedUser: action.payload,
      };
    case USERS_CLEAN_CREATED_USER:
      return {
        ...state,
        createdUser: {},
      };
    case USERS_CLEAN_EDITED_USER:
      return {
        ...state,
        editedUser: {},
      };
    case USERS_DELETE_USER_SUCCESSFUL:
      return {
        ...state,
        userDeletedSuccessfully: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
